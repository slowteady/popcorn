import PendingIcon from "@mui/icons-material/Pending";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { InView } from "react-intersection-observer";
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
// 영화 검색 창 / 리스트
// ----------------------------------------------------------------------
// 1. 상단 헤더 바에서 검색 후 무비 리스트 페이지에서 다른 키워드로 검색할 경우
// 2. 좌측 메뉴로 들어와서 무비 리스트 페이지로 검색 두번 하는 경우
// 3. 상단 헤더 바에서 검색 두번 하는 경우

const MovieSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [inputValue, setInputValue] = useState(keyword);
  const [prevValue, setPrevValue] = useState<string>();
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [query, setQuery] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [movie, setMovie] = useRecoilState(moviesSearchList);
  const location = useLocation();

  // 검색 결과 API 요청
  const { status, data } = useQuery(
    ["searchMovieData", query, page],
    () => getSearchMovieData(query, page),
    { enabled }
  );

  useEffect(() => {
    setEnabled(true);
  }, [page]);

  useEffect(() => {
    setPage(1);
    setMovie([]);
  }, [query]);

  useEffect(() => {
    // 좌측 메뉴를 통해 들어온 경우
    if (!location.state || !location.state.search) {
      init();
    } else {
      setEnabled(true);
      setQuery(inputValue);
      setPrevValue(inputValue);
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
      if (prevValue !== inputValue) {
        init();
      }
      setEnabled(true);
      setPrevValue(inputValue);
      setQuery(inputValue);
    }
  };

  // 버튼 클릭 시
  const handleClick = (e: MouseEvent) => {
    if (strCheck.isNotEmpty(inputValue)) {
      setEnabled(true);
      setPrevValue(inputValue);
      setQuery(inputValue);
    }
  };

  const handleView = (inView: boolean) => {
    // 초기 렌더링 시 로직 두번 타는 거 방지
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    if (inView && page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // 초기화
  const init = () => {
    setKeyword("");
    setInputValue("");
    setPage(1);
    setMovie([]);
    setIsFirstLoad(true);
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
      <Box sx={{ mt: 6 }}>{movie && <MovieList movies={movie} />}</Box>
      <InView onChange={handleView}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            mt: "20px",
          }}
        >
          {status === "loading" && <PendingIcon fontSize="large" />}
        </Box>
      </InView>
    </Container>
  );
};

export default MovieSearch;
