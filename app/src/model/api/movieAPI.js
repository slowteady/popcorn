const axios = require("axios");
const DateFormat = require('../classes/DateFormat');

// API 호출하여 데이터 가공
async function movieApi(data) {
  const arr = new Array();
  for (let i = 0; i < data.length; i++) {
    const jsonArr = new Object();

    let name = data[i].movieNm;
    let releaseDate = data[i].openDt;
    const date = new DateFormat();
    let opnDate = date.changeFormat(releaseDate);
    // jsonArr.name = name;

    const movieData = await callApi(name, opnDate);
    const mvData = movieData.data.Data[0].Result[0];
    
    // jsonArr.title = mvData.title;
    // jsonArr.image = mvData.image;
    // jsonArr.director = mvData.director;
    // jsonArr.actor = mvData.actor;
    // jsonArr.rank = data[i].rank;

    arr.push(jsonArr);
  }

  return arr;
}

// 영화 API 호출
function callApi(name, opnDate) {
  if (!name || !opnDate) {
    return false;
  }
  const url = "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp";
  const serviceKey = "6BP177BZNDL80SHH268S";
  const data = {
    params: {
      title: name,
      collection: "kmdb_new2",
      detail: "Y",
      releaseDts: opnDate,
      ServiceKey: serviceKey,
    },
  };
  const promise = axios.get(url, data);
  
  return promise;
}

module.exports = movieApi;
