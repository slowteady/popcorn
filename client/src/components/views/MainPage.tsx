import React from "react";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../services/userService";
import { loginAndOutValidate } from "../auth/userValidate";
import { Helmet } from "react-helmet-async";

// 메인 페이지
const MainPage = () => {
  const history = useHistory();
  const onclickLogout = async () => {
    const logout = await logoutUser();
    loginAndOutValidate(logout);
    history.push("/");
  };
  return (
    <>
      <Helmet>
        <title> Main | POPCORN! </title>
      </Helmet>
      <button onClick={onclickLogout}>logout</button>;
    </>
  );
};

export default MainPage;
