/* 
.env 파일 설정 값
1. NODE_ENV=환경 => package.json/scripts에 설정
2. SERVER_PORT=포트번호
3. MONGO_URI=MongoDB 커넥트 연결 정보
*/
const dotenv = require("dotenv");
const path = require("path");
const rootPath = path.resolve(__dirname, "../.."); // 절대경로

let envFile = ".env.development";
if (process.env.NODE_ENV === "production") {
  envFile = ".env.production";
}

const envPath = path.join(rootPath, envFile);
const init = () => {
  dotenv.config({ path: envPath });
};

module.exports = {
  init,
};
