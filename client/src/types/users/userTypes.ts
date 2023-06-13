// ----------------------------------------------------------------------
// 사용자 관련 타입 정의
// ----------------------------------------------------------------------
export interface LoginForm {
  Email: string;
  Password: string;
}
export interface SignupForm extends LoginForm {
  Name: string;
  ConfirmPassword: string;
  payload?: { isSuccess: boolean; msg?: unknown };
}
export interface LoginBody {
  email: string;
  password: string;
}
export interface SignupBody extends LoginBody {
  name: string;
}
export interface Signup {
  type?: "ERROR";
  payload: { isSuccess: boolean; msg?: unknown; code?: any };
}
export interface Payload {
  payload: {
    isSuccess: boolean;
    msg: string | unknown;
    user?: {} | boolean;
    isExpire?: boolean;
  };
}
export interface ProfileFormProps {
  avatarImg: string;
}
export interface ProfileBody {
  avatarImg: string;
  selfIntro: string;
}