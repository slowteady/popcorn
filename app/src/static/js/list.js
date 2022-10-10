const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', () => {
    location.href = "/list";
});

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    location.href = "/login";
});