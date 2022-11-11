document.addEventListener("DOMContentLoaded", callApi);

async function callApi() {
  try {
    const boxOff = new BoxOffice();
    const data = await boxOff.getData();
    for (let i = 0; i < data.length; i++) {
      doRender(data);
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
  // img width: 100%, height: 225px
  let template = `
  <div class="col">
    <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span class="justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
        </span>
      </div>
    </div>
  </div>`;
  colMain.insertAdjacentHTML("afterbegin", template);
}
