const express = require("express");
const config = require("./config/config");
const app = express();

// config 설정 파일 초기화
config.init(); 

// 포트번호 설정
const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => {
  console.log(`========Server start on ${port}========`);
});
