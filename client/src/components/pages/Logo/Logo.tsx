import { Box, Link } from "@mui/material";
import { SxProps } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import logoImg from "../../../img/popcorn_icon.png";

// ----------------------------------------------------------------------
// 로고 컴포넌트
// ----------------------------------------------------------------------

interface LogoProps {
  sx?: SxProps;
}

const Logo: FunctionComponent<LogoProps> = ({ sx }) => {
  const logo = (
    <Box
      component="img"
      src={logoImg}
      sx={{
        width: 50,
        height: 50,
        cursor: "pointer",
        ...sx,
      }}
    />
  );

  return (
    <Link to="/main" component={RouterLink} sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
};

export default Logo;
