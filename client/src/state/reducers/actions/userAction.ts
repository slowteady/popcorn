import axios from "axios";
import { Action } from "../users/userReducer";

interface Body {
  email: string;
  name: string;
  password: string;
}

// 서버에 요청
export const registerUser = (body: Body): Action => {
  const request = axios
    .post("/api/users/register", body)
    .then((response) => response.data);

  return {
    type: "REGISTER_USER",
    payload: request,
  };
};
