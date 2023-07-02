import {
  Button,
  ClickAwayListener,
  IconButton,
  Input,
  InputAdornment,
  Slide,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { CustomTheme } from "../../../types/theme/themeTypes";
import { bgBlur } from "../../../utils/styleUtils";
import Iconify from "../../iconify/Iconify";

// ----------------------------------------------------------------------
// 서치 바 컴포넌트
// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled("div")(({ theme }: { theme: CustomTheme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows ? theme.customShadows.z8 : "",
  [theme.breakpoints.up("md")]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

const Searchbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="영화를 검색해주세요"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{
                mr: 1,
                fontWeight: "fontWeightBold",
                "& input": {
                  padding: "8px 0 5px",
                },
              }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
};

export default Searchbar;
