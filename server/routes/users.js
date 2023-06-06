// 로그인, 회원가입 등 유저 관련 라우터
const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/userController");
const router = express.Router();

// 회원가입
router.post("/register", registerUser);

// 로그인
router.post("/login", loginUser);

// 로그아웃
router.get("/logout", logoutUser);

module.exports = router;
