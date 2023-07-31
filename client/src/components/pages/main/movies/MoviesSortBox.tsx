import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { SORT_TYPE_OPTION } from "../../../../config/movie/movieConfig";
import { moviesSortType } from "../../../../state/movieState";
import { MoviesSortBoxProps } from "../../../../types/state/movies/moviesTypes";
import Iconify from "../../../iconify/Iconify";

// ----------------------------------------------------------------------
// Movies 정렬 지정 박스 컴포넌트
// ----------------------------------------------------------------------

const MoviesSortBox = ({ onChange }: MoviesSortBoxProps) => {
  const [sortType, setSortType] = useRecoilState(moviesSortType);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); // 레이어 위치 참조를 위한 state

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
    setSortType({ value, label });
    onChange();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        color="inherit"
        disableRipple
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
          {sortType.label}
        </Typography>
      </Button>
      <Menu
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {SORT_TYPE_OPTION.map((option) => (
          <MenuItem
            onClick={() => {
              handleMenu(option.value, option.label);
            }}
            selected={option.value === "popular"}
            key={option.value}
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
