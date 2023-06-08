const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  name: {
    type: String,
    maxlength: 10,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

// 회원가입 이전 이벤트
userSchema.pre("save", function (next) {
  const user = this;
  const saltRounds = 10;

  // 비밀번호 필드에 변화가 있을 때를 감지
  if (user.isModified("password")) {
    try {
      // 비밀번호 암호화
      bcrypt.genSalt(saltRounds, async (err, salt) => {
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
      });
    } catch (err) {
      return next(err);
    }
  } else {
    next();
  }
});

// 비밀번호 비교
userSchema.methods.comparePassword = function (plainPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

// JWT 토큰 생성
userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toHexString() }, "secretToken", {
    expiresIn: "2h",
  });
  user.token = token;

  await user.save();
  return user;
};

// 토큰 검증
userSchema.statics.findByToken = async function (cookieToken) {
  const user = this;
  try {
    if (!cookieToken) {
      return false;
    }
    const token = cookieToken.token;
    const decodedToken = jwt.verify(token, "secretToken");
    const foundUser = await user.findOne({
      _id: decodedToken._id,
      token: token,
    });
    return foundUser;
  } catch (err) {
    // 토큰 만료 시
    if (err.name === "TokenExpiredError") {
      return err.name;
    } else {
      throw err;
    }
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
