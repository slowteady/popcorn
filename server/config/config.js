const dotenv = require("dotenv");
const os = require("os");
const path = require("path");
const rootPath = path.resolve(__dirname, "../.."); // 절대경로
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

let envFile = ".env.development";
if (process.env.NODE_ENV === "production") {
  envFile = ".env.production";
}

const envPath = path.join(rootPath, envFile);

const init = () => {
  dotenv.config({ path: envPath });
};

init();

if (process.env.NODE_ENV === "production") {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      new DailyRotateFile({
        filename: `${process.env.LOG_PATH}/server-%DATE%.log`,
        datePattern: "YYYY-MM-DD",
      }),
    ],
  });
  logger.info("========LOG START========");
}

const repo =
  os.platform() === "win32" ? "c:/repository" : process.env.UPLOAD_PATH;

module.exports = {
  init,
  repo,
};
