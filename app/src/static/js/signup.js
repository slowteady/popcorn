const email = document.querySelector('#email'),
    username = document.querySelector('#username'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#password'),
    confirmPw = document.querySelector('#confirm');

// 회원가입 등록 함수
function signup() {
    if(!email.value) return alert("이메일을 입력해주세요");
    if(password.value !== confirmPw.value) {
        return alert("비밀번호가 같지 않습니다");
    }

    const req = {
        email: email.value,
        username: username.value,
        phone: phone.value,
        password: password.value,
    };

    // 서버로 데이터 송신
    fetch('/signup', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if(res.success) {
            // location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 오류 발생");
    });
}

// 회원가입
const signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', signup);

// 뒤로가기 
const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', () => {
    location.href = "/";
});


    