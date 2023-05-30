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

const loginUser = (req, res) => {
  
};

module.exports = {
  registerUser,
  loginUser,
};
