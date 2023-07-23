const express = require("express");
const {
  registerCollection,
  getCollection,
} = require("../controllers/collectionController");
const { auth } = require("../middleware/auth");
const router = express.Router();

// 등록
router.post("/register", auth, registerCollection);

// 목록
router.get("/:page", auth, getCollection);

module.exports = router;
