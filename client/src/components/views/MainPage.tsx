import React from "react";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../services/userService";
import { loginAndOutValidate } from "../auth/userAuth";

// 메인 페이지
const MainPage = () => {
  const history = useHistory();
  const onclickLogout = async () => {
    const logout = await logoutUser();
    loginAndOutValidate(logout);
    history.push("/");
  }
  return <button onClick={onclickLogout}>logout</button>;
};

export default MainPage;
