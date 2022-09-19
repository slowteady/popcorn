// 비밀번호 찾기
const pw = document.querySelector('.pw');
pw.addEventListener('click', () => {
    alert('서비스 준비중입니다');
});

const signUpText = document.querySelector('.signUpText');
signUpText.addEventListener('click', () => {
    // 회원가입 페이지 구현 
});

const login = () => {
    const req = {
        id: id.value,
        password: password.value
    };
    
    fetch('/login', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
      .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error('에러 발생'));
      });
};

const loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', login);

