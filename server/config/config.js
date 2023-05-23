/* 
.env 파일 설정 값
1. SERVER_PORT = 포트번호
*/
const dotenv = require("dotenv");
const path = require("path");
const rootPath = path.resolve(__dirname, "../.."); // 절대경로
let envFile = ".env.development";
if (process.env.NODE_ENV === "production") {
    envFile = ".env.production";
}
const envPath = path.join(rootPath, envFile);
dotenv.config({ path: envPath });
console.log(process.env.NODE_ENV);
