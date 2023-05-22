const express = require("express");
const app = express();
const dotenv = require("dotenv");

if (process.env.NODE_ENV == "DEVELOPMENT") {
  dotenv.config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
}

// 포트번호 설정
const port = process.env.SERVER_PORT || 8080;

app.listen(port, () => {
  console.log(`========Server start on ${port}========`);
});
