import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/userService";
import { removeCookie } from "../utils/cookieUtils";

// ----------------------------------------------------------------------
// 사용자 검증 컴포넌트
// ----------------------------------------------------------------------

interface AuthProps {
  children: ReactNode;
}
const Auth: FunctionComponent<AuthProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    auth()
      .then((response) => {
        const isSuccess = response.payload.isSuccess;
        const isUser = response.payload.user;
        const isExpire = response.payload.isExpire;

        // 토큰 만료 시
        if (isExpire) {
          removeCookie("AUTH_TOKEN");
          navigate({
            pathname: "/",
            search: `?expired=true`,
          });
        } else if (!isSuccess || !isUser) {
          // 사용자 검증 실패 시
          navigate("/");
        }
      })
      .catch((err) => {
        navigate("/");
      });
  }, []);

  return <>{children}</>;
};

export default Auth;
