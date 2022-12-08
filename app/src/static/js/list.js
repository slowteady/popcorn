document.addEventListener("DOMContentLoaded", callApi);

// API 호출
async function callApi() {
  try {
    const boxOff = new BoxOffice();
    const data = await boxOff.getData();

    for (let i = 0; i < data.length; i++) {
      doRender(data[i], i);
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
  let director = data.director != '' ? data.director + ' 감독': '데이터 준비중입니다';
  let actorList = data.actor;
  let actor = "";
  if(actorList[0] != null && actorList.length > 0) {
    for(let i = 0; i < actorList.length; i++) {
      actor += ` ${actorList[i]} / `;
    }
  } else {
    actor = "";
  }
  let rank = data.rank;
 
  // 기본 템플릿
  let template = `
  <div class="col">
    <div class="card shadow-sm" id="movieFrame${rank}">
      <img class="bd-placeholder-img card-img-top" max-width="auto" height="350" src="${img}"></img>
      <div class="grade-group" id="gradeBox">
        <div class="circle"></div>
        <div class="grade">${rank}</div>
      </div>
      <div class="card-body">
        <div class="movieWrap">
          <div class="movieInfo">
            <div class="info movieNm" title="${name}">${name}</div>
            <div class="info movieDate" title="${releaseDate}">${releaseDate} 개봉</div>
            <div class="info movieDirec" title="${director}">${director}</div>
            <div class="info movieActor" title="${actor}">${actor}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  colMain.insertAdjacentHTML("beforeend", template);

  // 박스오피스 1위 왕관 이미지
  if(rank == 1) {
    const gradeBox = document.querySelector("#gradeBox");
    let template = `
      <img src="img/crown_icon.png" id="crownIcon">
    `;
    gradeBox.insertAdjacentHTML("beforeend", template);
  }

  // 모달 설정
  setModal(data, rank);
}

// 모달창 생성 함수
function setModal(data, rank) {
  const movieFrame = document.querySelector("#movieFrame" + rank);
  movieFrame.addEventListener("click", () => {
    modalOn(data);
  });

  // 모달 창
  function modalOn(data) {
    console.log(data);
    const height = document.body.scrollHeight;
    let template = `
    <div class="modalContainer" style="height: ${height}px">
      <div class="modalBox">
        <div class="imgBox" id="imgBox">
          <img class="img" id="img" src=${data.image}></img>
        </div>
        <div class="dataBox">
          <div class="box">
            <div class="rank">순위: ${data.rank}위</div>
          </div>
          <div class="box">
            <div class="nation">국가: ${data.nation}</div>
          </div>
          <div class="box">
            <div class="genre">장르: ${data.genre}</div>
          </div>
          <div class="box">
            <div class="rating">등급: ${data.rating}</div>
          </div>
          <div class="box">
            <div class="release">개봉일: ${data.releaseDate}</div>
          </div>
          <div class="box">
            <div class="actor">배우: ${data.actor}</div>
          </div>
          <div class="box">
            <div class="director">감독: ${data.director}</div>
          </div>
          <div class="box">
            <div class="plot">줄거리: ${data.plot}</div>
          </div>
        </div>
        <div class="titleBox">
          <div class="title">[${data.name}]</div>
        </div>
      </div>
    </div>
    `;
    
    // 모달 on
    document.body.insertAdjacentHTML("beforeend", template);

    const imgBox = document.querySelector("#imgBox");








    // 모달 off
    const modalContainer = document.querySelector('.modalContainer');
    modalContainer.addEventListener("click", function(e) {
      if(e.target == modalContainer) {
        modalContainer.remove();
      };
    });
  }
}


