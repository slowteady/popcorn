import { msg } from "../msgUtils";

// ----------------------------------------------------------------------
// 응답 받은 데이터 유효성 검사 유틸
// ----------------------------------------------------------------------

// Payload 응답 후처리
export const isSuccessValidate = (result: Payload) => {
  const { payload } = result;

  if (payload && payload.isSuccess) {
    if (payload.msg) {
      msg("success", payload.msg as string);
    }
    return true;
  } else {
    msg("error", payload.msg as string);
    return false;
  }
};
