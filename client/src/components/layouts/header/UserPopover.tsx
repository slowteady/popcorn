import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Typography,
  alpha,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { logoutUser } from "../../../services/userService";
import { userData, userDataType } from "../../../state/userState";
import { loginAndOutValidate } from "../../auth/userValidate";

// ----------------------------------------------------------------------
// 헤더 사용자 레이어
// ----------------------------------------------------------------------

const UserPopover = () => {
  const usrData = useRecoilValue(userData);
  const { name, image, email } = usrData as userDataType;

  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement | null>();

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setElement(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setElement(null);
  };

  const onClickLogout = async () => {
    handleClose();
    const logout = await logoutUser();
    loginAndOutValidate(logout);

    navigate("/");
  };

  const onClickProfile = () => {
    handleClose();
    navigate("/main/users/profile");
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          "&:hover": {
            bgcolor: "#b6d4b6",
          },
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.3),
            },
          }),
        }}
      >
        {image && <Avatar src={image} />}
      </IconButton>

      {element && (
        <Popover
          open={true}
          anchorEl={element}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 220,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem onClick={onClickProfile} sx={{ m: 1 }}>
            Profile
          </MenuItem>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem onClick={onClickLogout} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        </Popover>
      )}
    </>
  );
};

export default UserPopover;
