import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { SORT_TYPE_OPTION } from "../../../../config/movie/movieConfig";
import { moviesSortType } from "../../../../state/movieState";
import { MovieTypeProps } from "../../../../types/state/movies/moviesTypes";
import Iconify from "../../../iconify/Iconify";

// ----------------------------------------------------------------------
// MovieType 지정 컴포넌트
// ----------------------------------------------------------------------

const MoviesSortBox = ({ onChange }: MovieTypeProps) => {
  const [open, setOpen] = useState(false);
  const [movieType, setMovieType] = useRecoilState(moviesSortType);

  // 레이어 위치 참조를 위한 state
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleMenu = (value: string, label: string) => {
    setOpen(false);
    setMovieType({ value, label });
    onChange();
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={
          <Iconify
            icon={open ? "eva:chevron-up-fill" : "eva:chevron-down-fill"}
          />
        }
      >
        Sort By:&nbsp;
        <Typography
          component="span"
          variant="subtitle2"
          sx={{ color: "text.secondary" }}
        >
          {movieType.label}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {SORT_TYPE_OPTION.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === "popular"}
            onClick={() => {
              handleMenu(option.value, option.label);
            }}
            sx={{ typography: "body2" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MoviesSortBox;