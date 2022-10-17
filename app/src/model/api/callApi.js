const axios = require("axios");

let today = new Date();
today.setDate(today.getDate() - 7);
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let date = `${year}${month}${day}`;

const options = {
  boxOffice: {
    uri: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json",
    // itemPerPage: 갯수, weekGb: 0(월~일), targetDt: 날짜(yyyymmdd)
    qs: {
      itemPerPage: 8,
      weekGb: 0,
      key: "4ec6acd6fa9e588ee928df8034cc6e25",
      targetDt: date,
    },
  },
  movie: {},
};

// function callApi() {
//   axios({
//     method: "GET",
//     url: options.boxOffice.uri,
//     params: options.boxOffice.qs,
//   })
//     .then((res) => {
//         console.log(res.data);
//         return res.data;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
// ?itemPerPage=8&targetDt=20221012&weekGb=0&key=4ec6acd6fa9e588ee928df8034cc6e25
// 일별 : http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?row=8&targetDt=20221013&key=4ec6acd6fa9e588ee928df8034cc6e25
// 주간 :  http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?itemPerPage=8&targetDt=20221012&weekGb=0&key=4ec6acd6fa9e588ee928df8034cc6e25

module.exports = options;
