import {
  Avatar,
  Box,
  Drawer,
  Link,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import leftmenuConfig from "../../../config/layout/leftMenuConfig";
import { useResponsive } from "../../../hooks/useResponsive";
import { userData } from "../../../state/userState";
import { MenuProps } from "../../../types/layout/layoutTypes";
import Logo from "../../pages/Logo/Logo";
import LeftMenuList from "./LeftMenuList";

// ----------------------------------------------------------------------
// 좌측 메뉴 컴포넌트
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

const LeftMenu = ({ openNav, onCloseNav }: MenuProps) => {
  const usrData = useRecoilValue(userData);
  const { pathname } = useLocation();
  const { image, name } = usrData;
  const isDesktop = useResponsive({ query: "up", start: "lg" });

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = () => {
    return (
      <>
        <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
          <Logo />
        </Box>

        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none">
            <StyledAccount>
              <Avatar src={image} />

              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                  {name}
                </Typography>
              </Box>
            </StyledAccount>
          </Link>
        </Box>

        <LeftMenuList data={leftmenuConfig} />
      </>
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
      {isDesktop ? (
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
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent()}
        </Drawer>
      )}
    </Box>
  );
};

export default LeftMenu;
