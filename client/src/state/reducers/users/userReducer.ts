import { Form } from "../../../components/views/SignupPage";

export interface Action {
  type?: "ERROR";
  payload: { isSuccess: boolean; msg?: unknown, code?: any };
}

export const userReducer = (state: Form, action: Action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, payload: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
