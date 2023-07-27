const express = require("express");
const {
  registerCollection,
  getCollection,
  getDetailCollection,
  deleteCollection,
  editCollection,
  getPreCollection,
} = require("../controllers/collectionController");
const { auth } = require("../middleware/auth");
const router = express.Router();

// 등록
router.post("/register", auth, registerCollection);

// 목록
router.get("/:page", auth, getCollection);

// 조회
router.get("/detail/:id", auth, getDetailCollection);
router.get("/pre/:id", auth, getPreCollection);

// 삭제
router.delete("/", auth, deleteCollection);

// 수정
router.patch("/edit/:id", auth, editCollection);

module.exports = router;
