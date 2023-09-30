export const strValidation = {
  isEmpty: function (text: string) {
    return text.trim() === '' || text === null || text === undefined;
  },
  isNotEmpty: function (text: string) {
    return !this.isEmpty(text);
  }
};

export const signValidation = {
  emailValidate: function (email: string) {
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return regex.test(email)
      ? { isValid: true, errorMessage: '' }
      : { isValid: false, errorMessage: '*올바른 이메일 형식이 아닙니다.' };
  },
  nameValidate: function (name: string) {
    const regex = /^[가-힣a-zA-Z]+$/;
    return regex.test(name)
      ? { isValid: true, errorMessage: '' }
      : { isValid: false, errorMessage: '*이름은 영문자와 한글만 사용 가능합니다.' };
  },
  pwValidate: function (password: string) {
    const regex = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password)
      ? { isValid: true, errorMessage: '' }
      : { isValid: false, errorMessage: '*비밀번호는 8자 이상의 영문자, 숫자, !@#$%^&*만 사용 가능합니다.' };
  },
  signValidate: function (type: string, value: string) {
    switch (type) {
      case 'email':
        return this.emailValidate(value);
      case 'text':
        return this.nameValidate(value);
      case 'password':
        return this.pwValidate(value);
      default:
        return { isValid: false, errorMessage: '*알 수 없는 유형입니다.' };
    }
  }
};
