import { ReactNode } from "react";

// ----------------------------------------------------------------------
// 사용자 검증 타입
// ----------------------------------------------------------------------

export interface AuthPayload {
  payload: {
    isSuccess: boolean;
    msg: string | unknown;
    user?: object | boolean;
    isExpire?: boolean;
  };
}

export interface AuthProps {
  children: ReactNode;
}
