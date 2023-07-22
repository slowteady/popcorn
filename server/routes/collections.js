const express = require("express");
const { registerCollection } = require("../controllers/collectionController");
const router = express.Router();

// 등록
router.post("/register", registerCollection);

module.exports = router;
