const multer = require("multer");
const { repo } = require("../config/config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, repo);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
