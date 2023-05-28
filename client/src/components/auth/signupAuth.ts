import Swal from "sweetalert2";
import { Form } from "../views/SignupPage";
import { strCheck } from "../../utils/check";

export const validate = ({ Email, Name, Password, ConfirmPassword }: Form) => {
  // 비밀번호, 비밀번호 확인 일치 검증
  if (Password !== ConfirmPassword) {
    Swal.fire({
      icon: "error",
      title: "비밀번호가 일치하지 않아요",
    });
    return false;
  }

  // 비어 있는 값 검증
  if (
    strCheck.isEmpty(Email) ||
    strCheck.isEmpty(Name) ||
    strCheck.isEmpty(Password) ||
    strCheck.isEmpty(ConfirmPassword)
  ) {
    Swal.fire({
      icon: "error",
      title: "모든 정보를 입력해주세요",
    });
    return false;
  }

  // 이메일 패턴 검증
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailPattern.test(Email);
  if (!isValidEmail) {
    Swal.fire({
      icon: "error",
      title: "올바른 이메일의 형태로 입력해주세요",
    });
    return false;
  }

  // 이름 특수문자 검증
  const namePattern = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  const isValidName = namePattern.test(Name);
  if (isValidName) {
    Swal.fire({
      icon: "error",
      title: "이름엔 특수문자가 들어갈 수 없어요",
    });
    return false;
  }

  return true;
};
