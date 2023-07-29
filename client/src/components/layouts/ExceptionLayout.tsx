import { styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../pages/Logo/Logo";

// ----------------------------------------------------------------------
// 예외 페이지 레이아웃 컴포넌트
// ----------------------------------------------------------------------

const StyledHeader = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// -------------------------------------------------------------

const ExceptionLayout = () => {
  return (
    <>
      <StyledHeader>
        <Logo />
      </StyledHeader>

      <Outlet />
    </>
  );
};

export default ExceptionLayout;
