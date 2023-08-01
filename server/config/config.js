/* 
.env 파일 설정 값
1. NODE_ENV=환경 => package.json/scripts에 설정, ex) NODE_ENV=development ./server/index.js
2. SERVER_PORT=포트번호
3. MONGO_URI=MongoDB 커넥트 연결 정보
4. UPLOAD_PATH=저장소 PATH
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

init();

// 운영체제에 따른 repository path 설정
let repo = process.env.UPLOAD_PATH;

module.exports = {
  init,
  repo,
};
