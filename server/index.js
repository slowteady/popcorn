const express = require("express");
const config = require("./config/config");
const cookieParser = require("cookie-parser");

// config 설정 파일 초기화
config.init();

// DB 연결
const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGO_URI);
connect
  .then((res) =>
    console.log(
      `========MongoDB Connect To [${res.connections[0].name}]========`
    )
  )
  .catch((err) => console.error(err));

// Body 파싱 미들웨어 등록
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Cookie 미들웨어 등록
app.use(cookieParser());

// 유저 라우터
app.use("/api/users", require("./routes/users"));

// 포트번호 설정
const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => {
  console.log(`========Server start on ${port}========`);
});
