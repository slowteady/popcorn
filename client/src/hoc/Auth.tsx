import React, { ComponentType, FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/userService";
import { removeCookie } from "../utils/cookieUtils";

// ----------------------------------------------------------------------
// 사용자 검증 로직
// ----------------------------------------------------------------------

const Auth = <P extends {}>(
  SpecificComponent: ComponentType<P>
): FunctionComponent<P> => {
  const AuthCheck: FunctionComponent<P> = (props) => {
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

    return <SpecificComponent {...props} />;
  };

  return AuthCheck;
};

export default Auth;
