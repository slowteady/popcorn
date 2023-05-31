export interface LoginForm {
  Email: string;
  Password: string;
}

export interface SignupForm extends LoginForm {
  Name: string;
  ConfirmPassword: string;
  payload?: { isSuccess: boolean; msg?: unknown };
}

export interface SignupBody {
  email: string;
  name: string;
  password: string;
}

export interface Action {
  type?: "ERROR";
  payload: { isSuccess: boolean; msg?: unknown; code?: any };
}
