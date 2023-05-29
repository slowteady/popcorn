const User = require("../databases/models/Users");

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

module.exports = {
  registerUser,
};
