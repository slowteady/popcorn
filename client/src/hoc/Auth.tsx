import React, { ComponentType, FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../services/userService";
import { removeCookie } from "../utils/cookieUtils";
import { msg } from "../utils/msgUtils";

const Auth = <P extends {}>(
  SpecificComponent: ComponentType<P>
): FunctionComponent<P> => {
  const AuthCheck: FunctionComponent<P> = (props) => {
    const history = useHistory();

    const fail = () => {
      msg("error", "사용자 검증에 실패했어요 다시 로그인 해주세요");
      history.push("/");
    };
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
            fail();
          }
        })
        .catch((err) => {
          fail();
        });
    }, []);

    return <SpecificComponent {...props} />;
  };

  return AuthCheck;
};

export default Auth;
