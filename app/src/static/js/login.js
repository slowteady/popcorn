// 비밀번호 찾기
const pw = document.querySelector(".pw");
pw.addEventListener("click", () => {
  alert("서비스 준비중입니다");
});

// 회원가입
const signUpText = document.querySelector(".signUpText");
signUpText.addEventListener("click", () => {
  location.href = "/signup";
});

// 로그인 처리 로직
const login = () => {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/list";
      } else {
        Swal.fire({
          icon: "error",
          text: res.msg,
          closeOnClickOutside: false,
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", login);
