const User = require("../databases/models/Users");

// 사용자 검증 미들웨어
const auth = async (req, res, next) => {
  let token = req.cookies.x_auth;
  try {
    const user = await User.findByToken(token);

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = { auth };
