export interface Form {
    Name: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    payload?: { isSuccess: boolean; msg?: unknown };
  }

  export interface Action {
    type?: "ERROR";
    payload: { isSuccess: boolean; msg?: unknown, code?: any };
  }