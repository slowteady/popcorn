const axios = require("axios");

// API 호출하여 데이터 가공
class BoxOffice {
  async getData() {
    // 박스오피스 API 호출
    let boxOffData = await this.boxOffApi();
    const bxData = boxOffData.data.boxOfficeResult;
    const bxList = bxData.weeklyBoxOfficeList;

    // JSON배열 재생성
    const arr = new Array();
    const obj = new Object();

    for (let i = 0; i < bxList.length; i++) {
      const subArr = new Object();

      let name = bxList[i].movieNm;
      subArr.name = name;

      // 네이버 영화 API 호출
      let movieData = await this.movieApi(name);
      const mvData = movieData.data.items[0];

      subArr.image = mvData.image;
      subArr.director = mvData.director;
      subArr.actor = mvData.actor;
      subArr.rank = bxList[i].rank;

      arr.push(subArr);
    }
    obj.movie = arr;

    const info = {
      type: bxData.boxofficeType,
      date: bxData.showRange,
    }
    obj.info = info;
    
    const response = JSON.stringify(obj);
    
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
  movieApi(name) {
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

module.exports = BoxOffice;
