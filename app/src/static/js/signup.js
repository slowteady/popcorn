const id = document.querySelector("#id"),
  username = document.querySelector("#username"),
  phone = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm");

// 회원가입
const signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", signup);

// 뒤로가기
const backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", () => {
  location.href = "/";
});

// 회원가입 등록 
function signup() {
  const req = {
    id: {
      value: id.value,
      name: "아이디",
    },
    username: {
      value: username.value,
      name: "사용자 이름",
    },
    phone: {
      value: phone.value,
      name: "핸드폰 번호",
    },
    password: {
      value: password.value,
      name: "패스워드",
    },
    confirmPw: {
      value: confirmPw.value,
      name: "패스워드 확인",
    },
  };

  if (validate(req)) {
    const obj = {
      id: req.id.value,
      username: req.username.value,
      phone: req.phone.value,
      password: req.password.value,
    };
    // 서버로 데이터 송신
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          // location.href = "/login";
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        console.error("회원가입 중 오류 발생");
      });
  }
}
