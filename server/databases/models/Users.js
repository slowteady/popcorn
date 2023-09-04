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
  intro: {
    type: String,
    maxlength: 100,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  const saltRounds = 10;

  if (user.isModified("password")) {
    try {
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

userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toHexString() }, "secretToken", {
    expiresIn: "2h",
  });
  user.token = token;

  await user.save();
  return user;
};

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
    if (err.name === "TokenExpiredError") {
      return err.name;
    } else {
      throw err;
    }
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
