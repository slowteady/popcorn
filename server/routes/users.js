// 로그인, 회원가입 등 유저 관련 라우터
const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

// 회원가입
router.post("/register", registerUser);

module.exports = router;
