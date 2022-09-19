// 비밀번호 찾기
const pw = document.querySelector('.pw');
pw.addEventListener('click', () => {
    alert('서비스 준비중입니다');
});

const signUpText = document.querySelector('.signUpText');
signUpText.addEventListener('click', () => {
    
});

const login = () => {
    const req = {
        id: id.value,
        password: password.value
    };
    console.log(req);
};

const loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', login);
