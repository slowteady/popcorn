const mongoose = require("mongoose");
const brcypt = require("bcrypt");
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
  tokenExp: {
    type: Number,
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
      brcypt.genSalt(saltRounds, async (err, salt) => {
        const hash = await brcypt.hash(user.password, salt);
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

const User = mongoose.model("User", userSchema);
module.exports = User;
