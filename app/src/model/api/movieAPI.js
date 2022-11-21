const axios = require("axios");
const DateFormat = require('../classes/DateFormat');

// API 호출하여 데이터 가공
async function movieApi(data) {
  const arr = new Array();
  for (let i = 0; i < data.length; i++) {
    const jsonArr = new Object();

    // 이름
    let name = data[i].movieNm;
    jsonArr.name = name;

    // 개봉일자
    let releaseDate = data[i].openDt;
    jsonArr.releaseDate = releaseDate;

    // 날짜 변환 후 파라미터 보내 API 호출
    const date = new DateFormat();
    let opnDate = date.changeFormat(releaseDate);
    const movieData = await callApi(name, opnDate);
    const noData = {
      posters: 'img/nophoto_icon.png',
    }
    const mvData = movieData.data.Data[0].Result ? movieData.data.Data[0].Result[0] : noData;
    const jsonData = mvData ? mvData : noData;
    
    // 포스터 정보
    const posters = jsonData.posters;
    const image = posters.includes('|') || posters.includes('http') ? posters.split('|')[0] : posters;
    jsonArr.image = image;

    // 감독
    const director = mvData.directors ? mvData.directors.director[0].directorNm : '';
    jsonArr.director = director;

    // 배우
    const actorArr = new Array();
    const actorList = mvData.actors ? mvData.actors.actor : '';
    if(actorList) {
      for(let i = 0; i <= (actorList.length > 4 ? 4 : actorList.length); i++) {
        actorArr.push(actorList[i].actorNm);
      }
    }
    jsonArr.actor = actorArr;
    
    // 순위 
    jsonArr.rank = data[i].rank;
    
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
