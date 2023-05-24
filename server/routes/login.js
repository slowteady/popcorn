// 로그인 및 기본 path 라우터
const express = require("express");
const router = express.Router();

// 1. 로그인 전, "/"로 요청 왔을 시 로그인 페이지로 redirect
// 2. 로그인 후, "/"로 요청 왔을 시 메인 페이지로 redirect
router.get("/", (req, res) => res.send("HELLO WORLD!"));













module.exports = router;