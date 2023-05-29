import axios from "axios";
import { Action } from "../users/userReducer";

interface Body {
  email: string;
  name: string;
  password: string;
}

// 서버에 요청
export const registerUser = async (body: Body): Promise<Action> => {
  try {
    const response = await axios.post("/api/users/register", body);
    return {
      type: "REGISTER_USER",
      payload: response.data,
    };
  } catch (err) {
    console.error(err);
    return {
      type: "ERROR",
      payload: { isSuccess: false, msg: err },
    };
  }
};
