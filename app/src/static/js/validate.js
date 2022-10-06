// 빈 값 체크
const check = {
  isEmpty: (str) => {
    return str == "" || str == undefined || str == null || str == "null";
  },
  isNotEmpty: (str) => {
    return !this.isEmpty(str);
  },
};

// 유효성 검사
function validate(obj) {
  for (let n in obj) {
    let val = obj[n].value;
    let name = obj[n].name;
    if (check.isEmpty(val)) {
      return checkText(`※ ${name}을(를) 입력해주세요`);
    }
  }

  if (obj.password.value !== obj.confirmPw.value) {
    return checkText("※ 패스워드가 일치하지 않아요");
  }

  if(obj.password.value.length < 8) {
    return checkText("※ 패스워드를 8글자 이상 입력해주세요");
  } 
  return true;
}

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
      id = "아이디";
    } else if(attr === 'phone') {
      id = "전화번호";
    } else if(attr === 'username') {
      id = "유저네임";
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
    let text = "※ 전화번호는 숫자만 입력해주세요";
    checkText(text);
  }
}