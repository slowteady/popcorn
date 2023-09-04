const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const { repo } = require("./config/config");

const connect = mongoose.connect(process.env.MONGO_URI);
connect
  .then((res) =>
    console.log(
      `========MongoDB Connect To [${res.connections[0].name}]========`
    )
  )
  .catch((err) => console.error(err));

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

const app = express();
const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
  console.log(`========Server start on ${port}========`);
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/image", express.static(repo));
app.use(cookieParser());
app.use("/api/users", require("./routes/users"));
app.use("/api/collections", require("./routes/collections"));
