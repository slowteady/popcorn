import React, { ComponentType, FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../services/userService";
import { removeCookie } from "../utils/cookieUtils";

const Auth = <P extends {}>(
  SpecificComponent: ComponentType<P>
): FunctionComponent<P> => {
  const AuthCheck: FunctionComponent<P> = (props) => {
    const history = useHistory();

    useEffect(() => {
      auth()
        .then((response) => {
          const isSuccess = response.payload.isSuccess;
          const isUser = response.payload.user;
          const isExpire = response.payload.isExpire;

          // 토큰 만료 시
          if (isExpire) {
            removeCookie("AUTH_TOKEN");
            history.push({
              pathname: "/",
              search: `?expired=true`,
            });
          } else if (!isSuccess || !isUser) {
            // 사용자 검증 실패 시
            history.push("/");
          }
        })
        .catch((err) => {
          history.push("/");
        });
    }, []);

    return <SpecificComponent {...props} />;
  };

  return AuthCheck;
};

export default Auth;
