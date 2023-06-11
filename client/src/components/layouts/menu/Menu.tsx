import { Box, Drawer, alpha, styled } from "@mui/material";
import React from "react";
import { useResponsive } from "../../../hooks/useResponsive";
import Logo from "../../views/Logo/Logo";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

const Menu = () => {
  const isDesktop = useResponsive({ query: "up", start: "lg" });

  const renderContent = () => {
    return (
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>
    );
  };

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            bgcolor: "background.default",
            borderRightStyle: "dashed",
          },
        }}
      >
        {renderContent()}
      </Drawer>
    </Box>
  );
};

export default Menu;
