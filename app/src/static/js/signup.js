// input
const id = document.querySelector("#id"),
  username = document.querySelector("#username"),
  phone = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm"),
  checkedId = document.querySelector("#checkedId");

// ID 중복확인
const doubleChk = document.querySelector("#doubleChk");
doubleChk.addEventListener("click", idCheck);

function idCheck() {
  let val = id.value;
  let minlength = id.getAttribute("minlength");
  let length = val.length;
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
          checkText("※ 사용중인 아이디입니다");
          checkedId.value = "N";
        } else {
          checkText("※ 사용가능한 아이디입니다");
          checkedId.value = "Y";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    checkText(`※ 아이디를 ${parseInt(minlength) + 1}글자 이상 입력해주세요`);
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
    if (checkedId.value === "Y") {
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
            Swal.fire({
              icon: "success",
              title: "환영합니다!",
              text: "회원가입이 완료되었어요 ₍๐•ᴗ•๐₎"
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "오류가 발생했어요",
            });
          }
        })
        .catch((err) => {
          console.error("회원가입 중 오류 발생");
        });
    } else {
      checkText("※ 아이디 중복확인을 해주세요");
    }
  }
}

// 뒤로가기
const backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", () => {
  location.href = "/";
});
