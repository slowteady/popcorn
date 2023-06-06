import React, { ComponentType, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

const Auth = <P extends {}>(SpecificComponent: ComponentType<P>): FunctionComponent<P> => {
  const AuthCheck: FunctionComponent<P> = (props) => {

    return <SpecificComponent {...props} />;
  };

  return AuthCheck;
};
export default Auth;
