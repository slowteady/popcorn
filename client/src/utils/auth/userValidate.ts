import { AuthPayload } from "../../types/users/authTypes";
import { SignupFormObj, SignupPayload } from "../../types/users/signupTypes";
import { msg } from "../msgUtils";
import { strCheck } from "../validationUtils";

// ----------------------------------------------------------------------
// 사용자 유효성 검사 유틸
// ----------------------------------------------------------------------

export const inputValidate = ({
  Email,
  Name,
  Password,
  ConfirmPassword,
}: SignupFormObj) => {
  // 비밀번호, 비밀번호 확인 일치 검증
  if (Password !== ConfirmPassword) {
    msg("error", "비밀번호가 일치하지 않아요");
    return false;
  }

  // 비어 있는 값 검증
  if (
    strCheck.isEmpty(Email) ||
    strCheck.isEmpty(Name) ||
    strCheck.isEmpty(Password) ||
    strCheck.isEmpty(ConfirmPassword)
  ) {
    msg("error", "모든 정보를 입력해주세요");
    return false;
  }

  // 이메일 패턴 검증
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailPattern.test(Email);
  if (!isValidEmail) {
    msg("error", "올바른 이메일의 형태로 입력해주세요");
    return false;
  }

  // 이름 특수문자 검증
  const namePattern = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  const isValidName = namePattern.test(Name);
  if (isValidName) {
    msg("error", "이름엔 특수문자가 들어갈 수 없어요");
    return false;
  }

  return true;
};

// 회원가입 검증 및 완료 처리
export const signupValidate = (result: SignupPayload) => {
  const { payload } = result;

  if (payload && payload.isSuccess) {
    msg("success", "회원가입이 완료되었어요");
    return true;
  } else if (payload.code && payload.code == 11000) {
    // unique 위반 / 아이디 중복
    msg("error", "이미 존재하는 이메일이에요");
    return false;
  } else {
    msg("error", payload.msg as string);
    return false;
  }
};

// Payload 응답 성공 실패 검증
export const isSuccessValidate = (result: AuthPayload) => {
  const { payload } = result;

  if (payload && payload.isSuccess) {
    return true;
  } else {
    msg("error", payload.msg as string);
    return false;
  }
};
