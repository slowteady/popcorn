import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { bgBlur } from "../../../utils/cssStyles";
import UserPopover from "./UserPopover";

// ----------------------------------------------------------------------
// 헤더
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

const Header = () => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <UserPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};

export default Header;
