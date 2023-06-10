import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/userService";
import { loginAndOutValidate } from "../auth/userValidate";

// ----------------------------------------------------------------------
// 메인 페이지
// ----------------------------------------------------------------------

const MainPage = () => {
  const navigate = useNavigate();
  const onclickLogout = async () => {
    const logout = await logoutUser();
    loginAndOutValidate(logout);
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title> Main | POPCORN! </title>
      </Helmet>
      <button onClick={onclickLogout}>logout</button>
    </>
  );
};

export default MainPage;
