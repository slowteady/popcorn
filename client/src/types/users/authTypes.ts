// ----------------------------------------------------------------------
// 사용자 검증 타입 정의
// ----------------------------------------------------------------------

export interface AuthPayload {
  payload: {
    isSuccess: boolean;
    msg: string | unknown;
    user?: object | boolean;
    isExpire?: boolean;
  };
}