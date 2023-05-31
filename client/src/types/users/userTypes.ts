export interface loginForm {
  Email: string;
  Password: string;
}

export interface SignupForm extends loginForm {
    Name: string;
    ConfirmPassword: string;
    payload?: { isSuccess: boolean; msg?: unknown };
  }

  export interface Action {
    type?: "ERROR";
    payload: { isSuccess: boolean; msg?: unknown, code?: any };
  }