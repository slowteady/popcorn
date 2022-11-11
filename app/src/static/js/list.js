document.addEventListener("DOMContentLoaded", callApi);

async function callApi() {
  try {
    const boxOff = new BoxOffice();
    const data = await boxOff.getData();
    for (let i = 0; i < data.length; i++) {
      doRender(data[i]);
    }
  } catch (err) {
    console.error(err);
  }
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

function doRender(data) {
  const colMain = document.querySelector("#colMain");
  console.log(data);
  let img = data.image;
  let name = data.name;
  let releaseDate = data.releaseDate;
  let director = data.director;
  let actor = data.actor;
  let rank = data.rank;

  let template = `
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" max-width="auto" height="350" src="${img}"></img>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="justify-content-between align-items-center box">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">상세보기</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">평가하기</button>
          </div>
          <div class="grade-group">
            <div class="circle"></div>
            <div class="grade">${rank}</div>
          </div>
        </span>
      </div>
    </div>
  </div>`;
  colMain.insertAdjacentHTML("beforeend", template);
}
