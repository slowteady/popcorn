// API 호출하여 데이터 가공
class BoxOffice {
  async getData() {
    // 박스오피스 API 호출
    try {
      let boxOffData = await this.boxOffApi();
      const bxData = boxOffData.data.boxOfficeResult;
      const bxList = bxData.weeklyBoxOfficeList;
  
      let data = await this.movieApi(bxList);
      return data.data;
    } catch(err) {
      console.error(err);
    }
  }

  // 주간 박스오피스 API 호출
  boxOffApi() {
    const today = new Date();
    today.setDate(today.getDate() - 7);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const d = today.getDate();
    const day = d >= 10 ? d : "0" + d;
    const date = `${year}${month}${day}`;

    const url =
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json";
    const params = {
      params: {
        itemPerPage: 9,
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
    const promise = axios.post("/list", name);

    return promise;
  }
}
