import axios, { AxiosRequestConfig } from "axios";
import { LoginBody } from "../types/state/users/loginTypes";
import { ProfileBody } from "../types/state/users/profileTypes";
import { SignupBody } from "../types/state/users/signupTypes";
import { getCookie } from "../utils/cookieUtils";

// ----------------------------------------------------------------------
// 사용자 관련 서비스
// ----------------------------------------------------------------------

// 회원가입 요청
export const registerUser = async (body: SignupBody) => {
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
export const loginUser = async (body: LoginBody) => {
  try {
    const response = await axios.post("/api/users/login", body);
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

// 로그아웃 요청
export const logoutUser = async () => {
  try {
    const response = await axios.get("/api/users/logout");
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

// 사용자 검증 요청
export const authUser = async (token?: AxiosRequestConfig<any>) => {
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

// 사용자 프로파일 업데이트 요청
export const updateProfileUser = async (body: ProfileBody) => {
  const formData = new FormData();
  formData.append("intro", body.selfIntro);

  if (body.avatarImg) {
    formData.append("userImg", body.avatarImg);
  }

  try {
    const cookie = getCookie("AUTH_TOKEN");
    const id = cookie._id;

    const response = await axios.patch(`/api/users/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

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
