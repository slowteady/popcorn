const path = require("path");

const PathEncode = (file) => {
  const filePath = file.path;
  const fileName = path.basename(filePath);

  const encodedFileName = encodeURIComponent(fileName);
  const dirName = path.dirname(filePath);
  const resultPath = path.join(dirName, encodedFileName);

  return resultPath;
};

const fileEncode = (fileName) => {
  return encodeURIComponent(fileName);
};

module.exports = {
  PathEncode,
  fileEncode,
};
