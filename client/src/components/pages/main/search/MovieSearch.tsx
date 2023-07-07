import { Button, Container, InputAdornment, TextField } from "@mui/material";
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getSearchMovieData } from "../../../../services/movieService";
import { searchKeyword } from "../../../../state/searchState";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";
import { moviesSearchList } from "../../../../state/movieState";

// ----------------------------------------------------------------------
// 영화 검색 창
// ----------------------------------------------------------------------

const MovieSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [inputValue, setInputValue] = useState(keyword);
  const location = useLocation();
    
  useEffect(() => {
    // 좌측 메뉴를 통해 들어온 경우
    if (!location.state || !location.state.search) {
      setKeyword("");
    }
  }, [location]);

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  return (
    <Container>
      <TextField
        sx={{ width: 280 }}
        value={inputValue}
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
      />
      <Button variant="contained" sx={{ margin: "10px" }}>
        Search
      </Button>
    </Container>
  );
};

export default MovieSearch;
