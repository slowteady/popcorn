import { Form } from "../../../components/views/SignupPage";

export interface Action {
  type: "REGISTER_USER";
  payload: any;
}

export const userReducer = (state: Form, action: Action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, loginSuccess: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

