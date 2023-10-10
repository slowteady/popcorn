import { SignInForm, SignUpForm } from '../types/sign';

export const strValidation = (text: string) => ({
  isEmpty: function () {
    return text.trim() === '' || text === null || text === undefined;
  },
  isNotEmpty: function () {
    return !this.isEmpty();
  }
});

export const objValidation = (obj: Object) => ({
  isEmpty: function () {
    return Object.keys(obj).length < 0;
  },
  isNotEmpty: function () {
    return !this.isEmpty();
  },
  hasKey: function (key: string) {
    return obj.hasOwnProperty(key);
  }
});

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
  isPwEquals: function (password: string, confirmPassword: string) {
    return password === confirmPassword
      ? { isValid: true, errorMessage: '' }
      : { isValid: false, errorMessage: '*비밀번호가 일치하지 않습니다.' };
  },
  signUpValidate: function (fieldsName: string, formData: SignUpForm) {
    const { email, name, password, confirmPassword } = formData;

    switch (fieldsName) {
      case 'email':
        return this.emailValidate(email);
      case 'name':
        return this.nameValidate(name);
      case 'password':
        return this.pwValidate(password);
      case 'confirmPassword':
        return this.isPwEquals(password, confirmPassword);
      default:
        return { isValid: false, errorMessage: '*알 수 없는 유형입니다.' };
    }
  },
  signInValidate: function (fieldsName: string, formData: SignInForm) {
    const { email, password } = formData;

    switch (fieldsName) {
      case 'email':
        return this.emailValidate(email);
      case 'password':
        return this.pwValidate(password);
      default:
        return { isValid: false, errorMessage: '*알 수 없는 유형입니다.' };
    }
  }
};
