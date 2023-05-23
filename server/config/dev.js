const path = require("path");
const dotenv = require("dotenv");
const rootPath = path.resolve(__dirname, "../..");
const envPath = path.join(rootPath, '.env.development');

const config = dotenv.config({ path: envPath });

module.exports = config;