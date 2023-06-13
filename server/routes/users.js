// 로그인, 회원가입 등 유저 관련 라우터
const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authUser,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");
const router = express.Router();

// 회원가입
router.post("/register", registerUser);

// 로그인
router.post("/login", loginUser);

// 로그아웃
router.get("/logout", logoutUser);

// 사용자 검증
router.get("/auth", auth, authUser);
router.post("/auth", auth, authUser);

// 사용자 프로파일 업데이트
router.post("/updateprofile");

module.exports = router;
