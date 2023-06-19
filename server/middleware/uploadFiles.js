const multer = require("multer");
const fs = require("fs");
const { repo } = require("../config/config");
const { fileEncode } = require("../utils/encode");

if (!fs.existsSync(repo)) {
  fs.mkdirSync(repo, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, repo);
  },
  filename: function (req, file, cb) {
    cb(null, fileEncode(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
