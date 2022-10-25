const User = require("../model/User");
const userSchema = require("../databases/schemas/userSchema");
const BoxOffice = require("../model/api/BoxOffice");

const output = {
  index: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    res.render("login");
  },
  signup: (req, res) => {
    res.render("signup");
  },
  list: async (req, res) => {
    const boxOff = new BoxOffice();
    // console.log(await boxOff.getData());
    boxOff.getData();
    res.render("list");
  },
};

const process = {
  login: async (req, res, next) => {
    try {
      const user = new User(req.body);
      const response = await user.login();
      res.json(
        response
          ? { success: true }
          : { msg: "아이디 혹은 비밀번호가 일치하지 않아요" }
      );
    } catch (err) {
      next(err);
    }
  },
  signup: (req, res, next) => {
    try {
      const data = req.body;
      const user = new User(data);
      let isSuccess = user.signup();
      res.json(isSuccess ? { success: true } : { success: false });
    } catch (err) {
      next(err);
    }
  },
  idCheck: async (req, res, next) => {
    try {
      const data = req.body;
      const result = await userSchema.findOne({ id: data.val });
      res.json(result ? { success: true } : { success: false });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = {
  output,
  process,
};
