import { Button, Container, InputAdornment, TextField } from "@mui/material";
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getSearchMovieData } from "../../../../services/movieService";
import { moviesSearchList } from "../../../../state/movieState";
import { searchKeyword } from "../../../../state/searchState";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";
import MovieList from "../movies/MovieList";

// ----------------------------------------------------------------------
// 영화 검색 창
// ----------------------------------------------------------------------

const MovieSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [inputValue, setInputValue] = useState(keyword);
  const [query, setQuery] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [movie, setMovie] = useRecoilState(moviesSearchList);
  const location = useLocation();

  // 검색 결과 API 요청
  const { status, data } = useQuery(
    ["searchMovieData", query],
    () => getSearchMovieData(query),
    { enabled }
  );

  useEffect(() => {
    // 좌측 메뉴를 통해 들어온 경우
    if (!location.state || !location.state.search) {
      setKeyword("");
    } else {
      setEnabled(true);
      setQuery(inputValue);
    }
  }, [location]);

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  useEffect(() => {
    if (data && status === "success") {
      setMovie((prevMovie) => [...prevMovie, ...data.payload]);
    }
  }, [data]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi, "");
    setInputValue(newValue);
  };

  // 엔터 키 입력 시
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && strCheck.isNotEmpty(inputValue)) {
      setQuery(inputValue);
      setEnabled(true);
    }
  };

  // 버튼 클릭 시
  const handleClick = (e: MouseEvent) => {
    if (strCheck.isNotEmpty(inputValue)) {
      setQuery(inputValue);
      setEnabled(true);
    }
  };

  return (
    <Container>
      <TextField
        sx={{ width: 280 }}
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        placeholder="영화를 검색해주세요"
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
      />
      <Button variant="contained" sx={{ margin: "10px" }} onClick={handleClick}>
        Search
      </Button>
      {movie && <MovieList movies={movie} />}
    </Container>
  );
};

export default MovieSearch;
