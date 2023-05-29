import { Form } from "../../../components/views/SignupPage";

export interface Action {
  type: "REGISTER_USER" | "ERROR";
  payload: { isSuccess: boolean; msg?: unknown };
}

export const userReducer = (state: Form, action: Action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return { ...state, payload: action.payload };
    case "ERROR":
      return { ...state, payload: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
