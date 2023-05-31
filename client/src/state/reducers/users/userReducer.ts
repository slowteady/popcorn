import { Signup, SignupForm } from "../../../types/users/userTypes";

export const userReducer = (state: SignupForm, action: Signup) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, payload: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
