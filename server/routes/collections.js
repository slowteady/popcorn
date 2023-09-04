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

router.get("/:page", auth, getCollection);
router.get("/detail/:id", auth, getDetailCollection);
router.post("/register", auth, registerCollection);
router.get("/pre/:id", auth, getPreCollection);
router.patch("/edit/:id", auth, editCollection);
router.delete("/", auth, deleteCollection);

module.exports = router;
