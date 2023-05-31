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

export interface Login {
  payload: { isSuccess: boolean; msg: string | unknown };
}
