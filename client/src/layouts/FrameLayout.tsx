import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logo from "../components/views/Logo/Logo";

// -------------------------------------------------------------

const StyledHeader = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
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
