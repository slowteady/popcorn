const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

module.exports = {
  registerUser,
};
