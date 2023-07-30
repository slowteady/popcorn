const User = require("../databases/models/Users");

// 회원가입
const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).json({ isSuccess: true });
  } catch (err) {
    console.error(err);

    res.json({ isSuccess: false, msg: err, code: err.code });
  }
};

// 로그인
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ isSuccess: false, msg: "일치하는 사용자가 없어요" });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.json({ isSuccess: false, msg: "비밀번호가 일치하지 않아요" });
    }

    // 토큰 생성
    const token = await user.generateToken();

    // 쿠키에 토큰 저장
    res.cookie("AUTH_TOKEN", token).status(200).json({ isSuccess: true });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);

    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

// 로그아웃
const logoutUser = async (req, res) => {
  const token = req.cookies.AUTH_TOKEN;
  try {
    // 토큰 검증
    const foundUser = await User.findByToken(token);

    if (foundUser) {
      // 토큰 정보 빈 값처리
      await User.findOneAndUpdate({ _id: foundUser._id }, { token: "" });
      res.clearCookie("AUTH_TOKEN");

      return res.status(200).json({ isSuccess: true });
    } else {
      res.clearCookie("AUTH_TOKEN");
      res.json({
        isSuccess: false,
        msg: "사용자 정보가 없어요. 재로그인 해주세요",
      });
    }
  } catch (err) {
    console.error(err);
    res.clearCookie("AUTH_TOKEN");

    res.json({ isSuccess: false, msg: "오류가 발생했어요. 재로그인 해주세요" });
  }
};

// 사용자 검증
const authUser = (req, res) => {
  try {
    const { user, isExpire } = req;
    let obj = {};

    if (user) {
      obj = {
        isSuccess: true,
        user: {
          id: user._id,
          email: user.email,
          image: user.image,
          intro: user.intro,
          name: user.name,
        },
      };
    }

    if (isExpire) {
      obj.isSuccess = false;
      obj.user = false;
      obj.isExpire = true;
    }

    res.status(200).json(obj);
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);

    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

// 사용자 프로파일 업데이트
const updateProfileUser = async (req, res) => {
  const userId = req.params.userId;
  const intro = req.body.intro;
  let filePath;

  if (req.file && req.file.path) {
    const file = req.file;
    filePath = `/image/${file.filename}`;
  }

  try {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { intro, image: filePath },
      { new: true }
    );
    const obj = {
      isSuccess: true,
      user: {
        email: user.email,
        image: user.image,
        intro: user.intro,
        name: user.name,
      },
    };

    res.status(200).json(obj);
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);

    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  authUser,
  updateProfile: updateProfileUser,
};
