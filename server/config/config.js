const dotenv = require("dotenv");
const os = require("os");
const path = require("path");
const rootPath = path.resolve(__dirname, "../..");

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
const envPath = path.join(rootPath, envFile);
const init = () => {
  dotenv.config({ path: envPath });
};
init();

const repo =
  os.platform() === "win32" ? "c:/repository" : process.env.UPLOAD_PATH;

module.exports = {
  init,
  repo,
};
