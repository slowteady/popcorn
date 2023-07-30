import React, { FunctionComponent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authUser } from "../../services/userService";
import { userData } from "../../state/userState";
import { AuthProps } from "../../types/state/users/authTypes";
import { removeCookie } from "../../utils/cookieUtils";

// ----------------------------------------------------------------------
// 사용자 로그인 검증 컴포넌트
// ----------------------------------------------------------------------

const Auth: FunctionComponent<AuthProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 여부
  const [isLoginedUser, setIsLoginedUser] = useState(false); // 로그인된 사용자인지 여부
  const [isExpired, setIsExpired] = useState(false); // 토큰 만료 여부
  const setData = useSetRecoilState(userData);

  useEffect(() => {
    authUser()
      .then((response) => {
        const { isSuccess, user, isExpire } = response.payload;

        // 유저 객체 전역으로 띄우기
        if (user) {
          setData(user);
        }

        // 토큰 만료 시
        if (isExpire) {
          removeCookie("AUTH_TOKEN");
          setIsExpired(true);
        } else if (isSuccess && user) {
          // 사용자 검증 성공 시
          setIsLoginedUser(true);
        } else {
          // 사용자 검증 실패 시
          setIsLoginedUser(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoginedUser(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <></>;
  } else if (isExpired) {
    return <Navigate to="/login" state={{ expired: true }} />;
  } else if (isLoginedUser) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Auth;
