const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', () => {
    location.href = "/list";
});

const logoutBtn = document.querySelector('#logoutBtn');
iconOver(logoutBtn);
logoutBtn.addEventListener('click', () => {
    location.href = "/login";
});

const officeTxt = document.querySelector('#officeTxt');
officeTxt.addEventListener('click', () => {
    location.href = "/list";
});

const myPageBtn = document.querySelector('#mypage');
iconOver(myPageBtn);

function iconOver(btn) {
    btn.addEventListener('mouseenter', (event) => {
        zoomIn(event);
    });
    btn.addEventListener('mouseleave', (event) => {
        zoomOut(event);
    });
}
function zoomIn(event) {
    event.target.style.width = "30px";
    event.target.style.height = "35px";
    event.target.style.transition = "all 0.2s";
}
function zoomOut(event) {
    event.target.style.width = "30px";
    event.target.style.height = "30px";
    event.target.style.transition = "all 0.2s";
}