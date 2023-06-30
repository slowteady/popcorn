import React, { FunctionComponent, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { auth } from "../services/userService";
import { userData, userDataType } from "../state/userState";
import { removeCookie } from "../utils/cookieUtils";

// ----------------------------------------------------------------------
// 사용자 검증 컴포넌트
// ----------------------------------------------------------------------

interface AuthProps {
  children: ReactNode;
}
const Auth: FunctionComponent<AuthProps> = ({ children }) => {
  const setData = useSetRecoilState(userData);
  const navigate = useNavigate();

  useEffect(() => {
    auth()
      .then((response) => {
        const isSuccess = response.payload.isSuccess;
        const user = response.payload.user as userDataType;
        const isExpire = response.payload.isExpire;

        // 유저 객체 전역으로 띄우기
        if (user) {
          setData(user);
        }

        // 토큰 만료 시
        if (isExpire) {
          removeCookie("AUTH_TOKEN");
          navigate({
            pathname: "/",
            search: `?expired=true`,
          });
        } else if (!isSuccess || !user) {
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
