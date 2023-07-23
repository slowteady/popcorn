const express = require("express");
const { registerCollection } = require("../controllers/collectionController");
const { auth } = require("../middleware/auth");
const router = express.Router();

// 등록
router.post("/register", auth, registerCollection);

module.exports = router;
