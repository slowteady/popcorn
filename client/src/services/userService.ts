import axios from "axios";
import { Signup, LoginBody, SignupBody, Login } from "../types/users/userTypes";

// 회원가입 요청
export const registerUser = async (body: SignupBody): Promise<Signup> => {
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
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
// 로그인 요청
export const loginUser = async (body: LoginBody): Promise<Login> => {
  try {
    const response = await axios.post("/api/users/login", body);
    const obj = { payload: response.data };
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
