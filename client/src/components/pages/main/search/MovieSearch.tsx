import { Button, Container, InputAdornment, TextField } from "@mui/material";
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
} from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../../../../state/searchState";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";

// ----------------------------------------------------------------------
// 영화 검색 창
// ----------------------------------------------------------------------

const MovieSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // 특수문자 방지
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi, "");
    setKeyword(newValue);
  };

  useEffect(() => {
    if (strCheck.isEmpty(location.state?.search)) {
      setKeyword("");
    }
  }, [location.state?.search]);

  // 엔터 키 입력 시
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setKeyword("");
    }
  };

  // 버튼 클릭 시
  const handleClick = (e: MouseEvent) => {
    setKeyword("");
  };

  return (
    <Container>
      <TextField
        value={keyword}
        sx={{ width: 280 }}
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon={"eva:search-fill"}
                sx={{ ml: 1, width: 20, height: 20, color: "text.disabled" }}
              />
            </InputAdornment>
          ),
        }}
        placeholder="영화를 검색해주세요"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <Button variant="contained" sx={{ margin: "10px" }} onClick={handleClick}>
        Search
      </Button>
    </Container>
  );
};

export default MovieSearch;
