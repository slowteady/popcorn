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

const MovieSearchBack = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword);
  const [movie, setMovie] = useRecoilState(moviesSearchList);
  const inputRef = useRef<HTMLInputElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [query, setQuery] = useState("");
  const [preValue, setPreValue] = useState("");
  const location = useLocation();

  const { status, data } = useQuery(
    ["searchMovieData", query],
    () => getSearchMovieData(query),
    { enabled }
  );

  // 특수문자 방지
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi, "");
    setKeyword(newValue);
  };

  // search 파라미터 존재하지 않을 시, keyword 초기화
  useEffect(() => {
    if (strCheck.isEmpty(location.state?.search)) {
      setKeyword("");
      setQuery("");
      setMovie([]);
    } else if (strCheck.isNotEmpty(location.state?.search)) {
      setQuery(keyword);
      setEnabled(true);
      setPreValue(keyword);
    }
  }, [location.key, location.state?.search]);

  useEffect(() => {
    if (status === "success") {
      setMovie((prevMovie) => [...prevMovie, ...data.payload]);
    }
  }, [data]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  // API 요청을 위해 필요한 state를 업데이트 하는 함수
  const onRequest = () => {
    const input = inputRef.current;

    if (input) {
      const value = input.value;
      console.log(value, preValue);
      if (value !== preValue) {
        setMovie([]);
      }
      setQuery(value);
      setPreValue(value);
    }
    setEnabled(true);
  };

  // 엔터 키 입력 시
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && strCheck.isNotEmpty(keyword)) {
      onRequest();
    }
  };

  // 버튼 클릭 시
  const handleClick = (e: MouseEvent) => {
    if (strCheck.isNotEmpty(keyword)) {
      onRequest();
    }
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

export default MovieSearchBack;
