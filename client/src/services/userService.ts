import axios, { AxiosRequestConfig } from "axios";
import {
  LoginBody,
  Payload,
  ProfileBody,
  Signup,
  SignupBody,
} from "../types/users/userTypes";

// ----------------------------------------------------------------------
// 로그인, 회원가입 관련 서비스 로직
// ----------------------------------------------------------------------

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
export const loginUser = async (body: LoginBody): Promise<Payload> => {
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

// 로그아웃 요청
export const logoutUser = async (): Promise<Payload> => {
  try {
    const response = await axios.get("/api/users/logout");
    const obj = { payload: response.data };
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 사용자 검증 요청
export const auth = async (
  token?: AxiosRequestConfig<any>
): Promise<Payload> => {
  try {
    let response;
    if (token) {
      const body = {
        token,
      };
      response = await axios.post("/api/users/auth", body);
    } else {
      response = await axios.get("/api/users/auth");
    }

    const obj = { payload: response.data };
    return obj;
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};

// 사용자 프로파일 업데이트 요청
export const updateProfile = async (data: ProfileBody) => {
  const body = {
    intro: data.selfIntro,
    userImg: data.avatarImg,
  };

  try {
    const response = await axios.patch(
      "/api/users/update/:6478838d1e75dd1dc3ac98cd",
      body
    );
  } catch (err) {
    console.error(err);
    return {
      payload: { isSuccess: false, msg: "오류가 발생했어요" },
    };
  }
};
