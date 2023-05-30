import axios from "axios";
import { Action } from "../../../types/users/userTypes";

interface Body {
  email: string;
  name: string;
  password: string;
}

// 서버에 요청
export const registerUser = async (body: Body): Promise<Action> => {
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
