const express = require("express");
const {
  registerCollection,
  getCollection,
  getDetailCollection
} = require("../controllers/collectionController");
const { auth } = require("../middleware/auth");
const router = express.Router();

// 등록
router.post("/register", auth, registerCollection);

// 목록
router.get("/:page", auth, getCollection);

// 조회
router.get("/detail/:id", auth, getDetailCollection);

module.exports = router;
