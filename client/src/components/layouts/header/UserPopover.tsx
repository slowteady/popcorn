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
import { logoutUser } from "../../../services/userService";
import { loginAndOutValidate } from "../../auth/userValidate";
import defaultUserImg from "../../img/default_user.png";

// ----------------------------------------------------------------------
// 헤더 사용자
// ----------------------------------------------------------------------

const mock = {
  displayName: "이용민",
  email: "vbn0213@naver.com",
  photoURL: defaultUserImg,
  userImg: "",
};

const UserPopover = () => {
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

  const onclickLogout = async () => {
    setOpen(false);
    setElement(null);
    const logout = await logoutUser();
    loginAndOutValidate(logout);
    
    navigate("/");
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          bgcolor: (theme) => (mock.userImg ? null : "#a39595"),
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
        <Avatar src={mock.photoURL} alt="photoURL" />
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
              {mock.displayName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {mock.email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem onClick={onclickLogout} sx={{ m: 1 }}>
            Logout
          </MenuItem>
        </Popover>
      )}
    </>
  );
};

export default UserPopover;
