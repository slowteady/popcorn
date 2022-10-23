const axios = require("axios");

// API 호출하여 데이터 가공
class BoxOffice {
  async getData() {
    let boxOffData = await this.boxOffApi();
    const bxData = boxOffData.data.boxOfficeResult;
    const bxList = bxData.weeklyBoxOfficeList;

    // JSON배열 재생성
    const arr = new Array();
    const jsonArr = new Object();
    jsonArr.type = bxData.boxofficeType;
    jsonArr.range = bxData.showRange;

    for(let i = 0; i < bxList.length; i++) {
      jsonArr.name = bxList[i].movieNm;
      jsonArr.rank = bxList[i].rank;

      arr.push(jsonArr);
    }

    const response = JSON.stringify(arr);
    return response;
  }

  // 주간 박스오피스 API 호출
  boxOffApi() {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const date = `${year}${month}${day}`;

    const url =
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json";
    const params = {
      params: {
        itemPerPage: 8,
        weekGb: 0,
        key: "4ec6acd6fa9e588ee928df8034cc6e25",
        targetDt: date,
      },
    };
    const promise = axios.get(url, params);

    return promise;
  }

  // 영화 API 호출
  movieApi() {
    const url = "https://openapi.naver.com/v1/search/movie.json";
    const clientId = "7ySJaDi3l9q6z1Jg_NVH";
    const secret = "NAgJHAIq40";
    const header = {
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": secret,
      },
    };
    const param = {
      query: "어벤져스",
    };
    const promise = axios.get(url, param, header);
  }
}

module.exports = BoxOffice;
