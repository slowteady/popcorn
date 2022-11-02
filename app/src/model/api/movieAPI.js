const axios = require("axios");

// API 호출하여 데이터 가공
class movieAPI {
  constructor(data) {
    const value = this.data;
  }
  
  // 영화 API 호출
  callApi() {
    const url = "https://openapi.naver.com/v1/search/movie.json";
    const clientId = "NTBqClUaZFMYahJjFa6B";
    const secret = "cn0smudzqa";
    const data = {
      params: {
        query: name,
      },
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": secret,
      },
    };
    const promise = axios.get(url, data);

    return promise;
  }
}

module.exports = movieAPI;
