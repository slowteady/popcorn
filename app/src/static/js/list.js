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
        <div class="info movieNm" title="${name}">${name}</div>
        <div class="info movieDate" title="${releaseDate}">${releaseDate} 개봉</div>
        <div class="info movieDirec" title="${director}">${director} 감독</div>
        <span class="justify-content-between align-items-center box">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">상세보기</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">평가하기</button>
          </div>
          <div class="grade-group" id="gradeBox">
            <div class="circle"></div>
            <div class="grade">${rank}</div>
          </div>
        </span>
      </div>
    </div>
  </div>`;
  colMain.insertAdjacentHTML("beforeend", template);

  if(rank == 1) {
    const gradeBox = document.querySelector("#gradeBox");
    let template = `
      <img src="img/crown_icon.png" id="crownIcon">
    `;
    gradeBox.insertAdjacentHTML("beforeend", template);
  }
}
