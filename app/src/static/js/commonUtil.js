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
        return alert(`${name}을(를) 입력해주세요`);
      }
    }
  
    if (obj.password.value !== obj.confirmPw.value) {
      return alert("패스워드와 패스워드 확인이 다릅니다");
    }
  
    return true;
  }