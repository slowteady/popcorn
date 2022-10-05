// input
const id = document.querySelector("#id"),
  username = document.querySelector("#username"),
  phone = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm");


// ID 중복확인
const doubleChk = document.querySelector("#doubleChk");
doubleChk.addEventListener("click", idCheck);

function idCheck() {
  let val = id.value;
  let minlength = id.getAttribute('minlength');
  let length = val.length;
  let text;
  if (length > minlength) {
    fetch("/signup/idCheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ val }),
    })
      .then((res) => res.json())
      .then((res) => {
        let result = res.success;
        if (result) {
          text = "※ 사용중인 아이디입니다";
          checkText(text);
        } else {
          text = "※ 사용가능한 아이디입니다";
          checkText(text);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    text = "※ 아이디를 6글자 이상 작성해주세요";
    checkText(text);
  }
}

// 회원가입
const signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", signup);

function signup() {
  const req = {
    id: {
      value: id.value,
      name: "아이디",
    },
    username: {
      value: username.value,
      name: "유저네임",
    },
    phone: {
      value: phone.value,
      name: "전화번호",
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

// 뒤로가기
const backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", () => {
  location.href = "/";
});
