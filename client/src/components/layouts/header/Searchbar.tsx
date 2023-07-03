import {
  Button,
  ClickAwayListener,
  IconButton,
  Input,
  InputAdornment,
  Slide,
  styled,
} from "@mui/material";
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { searchKeyword } from "../../../state/searchState";
import { CustomTheme } from "../../../types/theme/themeTypes";
import { bgBlur } from "../../../utils/styleUtils";
import { strCheck } from "../../../utils/validationUtils";
import Iconify from "../../iconify/Iconify";

// ----------------------------------------------------------------------
// 헤더 서치 바
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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const setSearchKeyword = useSetRecoilState(searchKeyword);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 특수문자 방지
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi, "");
    e.target.value = newValue;
  };

  // 엔터 키 입력 시
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      setSearchKeyword(input.value);
      setOpen(false);
      navigate("/main/search");
    }
  };

  // 버튼 클릭 시
  const handleClick = (e: MouseEvent) => {
    const input = inputRef.current;
    if (input && strCheck.isNotEmpty(input.value)) {
      setSearchKeyword(input.value);
      navigate("/main/search");
    }
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
              onKeyDown={handleKeyDown}
              inputRef={inputRef}
              onChange={handleInputChange}
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
            <Button variant="contained" onClick={handleClick}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
};

export default Searchbar;
