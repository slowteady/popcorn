import { Action, Form } from "../../../types/users/userTypes";

export const userReducer = (state: Form, action: Action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, payload: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
