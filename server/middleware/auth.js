const User = require("../databases/models/Users");

const auth = async (req, res, next) => {
  let token = req.cookies.AUTH_TOKEN;
  const authToken = req.body.token;

  if (authToken) {
    token = authToken;
  }

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
