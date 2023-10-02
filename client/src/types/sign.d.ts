export interface BasicForm {
  email: string;
  password: string;
}
export interface SignUpForm extends BasicForm {
  name: string;
  confirmPassword: string;
}
