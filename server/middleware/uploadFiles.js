const multer = require("multer");
const fs = require("fs");
const { repo } = require("../config/config");

if (!fs.existsSync(repo)) {
  fs.mkdirSync(repo, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, repo);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
