const axios = require("axios");

// API 호출하여 데이터 가공
async function movieApi(data) {
  const arr = new Array();
  for (let i = 0; i < data.length; i++) {
    const jsonArr = new Object();

    let name = data[i].movieNm;
    jsonArr.name = name;

    const movieData = await callApi(name);
    const mvData = movieData.data.items[0];

    jsonArr.title = mvData.title;
    jsonArr.image = mvData.image;
    jsonArr.director = mvData.director;
    jsonArr.actor = mvData.actor;
    jsonArr.rank = data[i].rank;

    arr.push(jsonArr);
  }

  return arr;
}

// 영화 API 호출
function callApi(name) {
  if (!name) {
    return false;
  }
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

module.exports = movieApi;
