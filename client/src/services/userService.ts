import axios from "axios";
import { Action, LoginBody, SignupBody } from "../types/users/userTypes";

// 회원가입 요청
export const registerUser = async (body: SignupBody): Promise<Action> => {
  try {
    const response = await axios.post("/api/users/register", body);
    const obj = { payload: response.data };
    if (response.data.msg && response.data.msg.code) {
      // 에러 코드 있을 시
      obj.payload.code = response.data.msg.code;
    }
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: err },
    };
  }
};
// 로그인 요청
export const loginUser = async (body: LoginBody): Promise<Action> => {
  try {
    const response = await axios.post("/api/users/login", body);
    const obj = { payload: response.data };

    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: err },
    };
  }
};
