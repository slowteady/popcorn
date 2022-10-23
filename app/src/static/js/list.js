window.onload = boxOffice;

async function boxOffice() {
  let data = await boxOffApi();
  console.log(data);
}

// 박스오피스 API 호출
async function boxOffApi() {
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
  const promise = await axios.get(url, params);
  let data = promise.data.boxOfficeResult;

  return data;
}

// 영화 API 호출
async function movieApi() {

  const url =
    "";
  const params = {
  };
//   const promise = await axios.get(url, params);
//   let data = promise.data.boxOfficeResult;

//   return data;
}

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
  location.href = "/list";
});

const logoutBtn = document.querySelector("#logoutBtn");
iconOver(logoutBtn);
logoutBtn.addEventListener("click", () => {
  location.href = "/login";
});

const officeBtn = document.querySelector("#officeBtn");
officeBtn.addEventListener("click", () => {
  location.href = "/list";
});

const myPageBtn = document.querySelector("#mypage");
iconOver(myPageBtn);
