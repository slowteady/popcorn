import { styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../pages/Logo/Logo";

// -------------------------------------------------------------

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

const FrameLayout = () => {
  return (
    <>
      <StyledHeader>
        <Logo />
      </StyledHeader>

      <Outlet />
    </>
  );
};

export default FrameLayout;
