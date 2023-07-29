// ----------------------------------------------------------------------
// 회원가입 타입 정의
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

export interface SignupPayload {
  payload: { isSuccess: boolean; msg?: string; code?: number };
}
