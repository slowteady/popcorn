const User = require("../model/User");
const userSchema = require("../databases/schemas/userSchema");
const movieApi = require("../model/api/movieAPI");
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
    res.render("list");
  },
};

const process = {
  // 로그인
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
  // 회원가입
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
  // ID 검증
  idCheck: async (req, res, next) => {
    try {
      const data = req.body;
      const result = await userSchema.findOne({ id: data.val });
      res.json(result ? { success: true } : { success: false });
    } catch (err) {
      next(err);
    }
  },
  // API 호출
  list: async (req, res) => {
    const data = req.body;
    const movie = await movieApi(data);
    res.json(movie);
  },
};

module.exports = {
  output,
  process,
};
