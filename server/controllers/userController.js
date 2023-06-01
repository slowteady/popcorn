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
    res
      .cookie("AUTH_TOKEN", token)
      .status(200)
      .json({ isSuccess: true, userId: user._id });
  } catch (err) {
    console.error("err: ", err, "code: ", err.code);
    res.json({ isSuccess: false, msg: "오류가 발생했어요" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
