// input
const id = document.querySelector("#id"),
  username = document.querySelector("#username"),
  phone = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPw = document.querySelector("#confirm");

// 유효성 검사 문구
function checkText(text) {
  const guideTxt = document.querySelector("#guideTxt");
  guideTxt.innerText = text;
}

// 특수문자 체크
function characterCheck(obj) {
  let attr = obj.getAttribute('id');
  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  if (regExp.test(obj.value)) {
    obj.value = obj.value.substring(0, obj.value.length - 1);
    let id;
    if(attr === 'id') {
      id = "ID";
    } else if(attr === 'phone') {
      id = "PHONE";
    } else if(attr === 'username') {
      id = "USERNAME";
    }
    let text = `※ ${id}에 특수문자는 사용하실 수 없어요`;
    checkText(text);
  } 
}

// 전화번호 길이 체크
function lengthCheck(obj) {
  let val = obj.value;
  const regex = /^[0-9\b -]{0,13}$/;
  if(!regex.test(val)) {
    obj.value = obj.value.substring(0, obj.value.length - 1);
    let text = "※ PHONE에는 숫자만 입력해주세요";
    checkText(text);
  }
}

// 중복확인
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
          text = "※ 사용중인 ID입니다";
          checkText(text);
        } else {
          text = "※ 사용가능한 ID입니다";
          checkText(text);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    text = "※ ID를 6글자 이상 작성해주세요";
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

// 뒤로가기
const backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", () => {
  location.href = "/";
});
