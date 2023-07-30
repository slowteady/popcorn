import { Box, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logoImg from "../../../img/popcorn_icon.png";

// ----------------------------------------------------------------------
// 로고 컴포넌트
// ----------------------------------------------------------------------

const Logo = () => {
  return (
    <Link to="/main" component={RouterLink} sx={{ display: "contents" }}>
      <Box
        component="img"
        src={logoImg}
        sx={{
          width: 50,
          height: 50,
          cursor: "pointer",
        }}
      />
    </Link>
  );
};

export default Logo;
