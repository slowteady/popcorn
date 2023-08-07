const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.tsx", // 처음 시작할 파일
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 확장자
        use: "ts-loader", // ts -> js 로 컴파일해줌
        exclude: /node_modules/, // 제외할 폴더
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // 모듈을 찾을 때 확장자 순서
  },
  output: {
    path: path.join(__dirname, "dist"), // 빌드하면 만들어질 경로
    filename: "bundle.js", // 파일 이름
    publicPath: "/",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: ".", globOptions: { ignore: ["**/index.html"] } },
      ],
    }),
  ],
};