// ----------------------------------------------------------------------
// 회원가입 타입
// ----------------------------------------------------------------------

export interface SignupFormObj {
  Email: string;
  Password: string;
  Name: string;
  ConfirmPassword: string;
}

export interface SignupBody {
  email: string;
  password: string;
  name: string;
}