const User = require("../databases/models/Users");

// 사용자 검증 미들웨어
const auth = async (req, res, next) => {
  let token = req.cookies.AUTH_TOKEN;
  try {
    const result = await User.findByToken(token);
    if (result === "TokenExpiredError") {
      req.isExpire = true;
    } else {
      req.token = token;
      req.user = result;
    }
    next();
  } catch (err) {
    throw err;
  }
};

module.exports = { auth };
