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
  memo,
  useEffect,
  useState,
} from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getSearchMovieData } from "../../../../services/searchService";
import { moviesSearchList } from "../../../../state/movieState";
import { searchKeyword } from "../../../../state/searchState";
import { SearchAlbumListProps } from "../../../../types/state/search/searchTypes";
import { strCheck } from "../../../../utils/validationUtils";
import Iconify from "../../../iconify/Iconify";
import CollectionAddMovieList from "../collection/CollectionAddMovieList";
import MoviesAlbumList from "../movies/MoviesAlbumList";

// ----------------------------------------------------------------------
// 영화 검색 창 / 리스트 컴포넌트
// ----------------------------------------------------------------------

const SearchAlbumList = ({ isCollection }: SearchAlbumListProps) => {
  const [keyword, setKeyword] = useRecoilState(searchKeyword); // 상단 검색 키워드
  const [movie, setMovie] = useRecoilState(moviesSearchList); // 영화 리스트
  const [inputValue, setInputValue] = useState(keyword); // 현재 값
  const [prevValue, setPrevValue] = useState(keyword); // 이전 값
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 초기 렌더링 여부
  const [page, setPage] = useState(1); // 페이지
  const [query, setQuery] = useState(""); // 검색어
  const [enabled, setEnabled] = useState(false); // Request 요청 여부
  const location = useLocation();

  // 검색 결과 API 요청
  const { status } = useQuery(
    ["searchMovieData", query, page],
    () => getSearchMovieData(query, page),
    {
      onSuccess: (data) => {
        if (data && data.payload.length > 0) {
          setMovie((prevMovie) => [...prevMovie, ...data.payload]);
        }
      },
      enabled,
    }
  );

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

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
    }
  }, [location]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/gi, "");
    setInputValue(newValue);
  };

  // 엔터 키 입력 시
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && strCheck.isNotEmpty(inputValue)) {
      if (prevValue !== inputValue) {
        setPage(1);
        setMovie([]);
        setIsFirstLoad(true);
      }
      setPrevValue(inputValue);
      setEnabled(true);
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

    if (inView) {
      setEnabled(true);
    }

    if (inView && page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // 초기화
  const init = () => {
    setKeyword("");
    setInputValue("");
    setQuery("");
    setPage(1);
    setMovie([]);
    setIsFirstLoad(true);
  };

  return (
    <Container>
      <TextField
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
        placeholder="영화를 검색해주세요"
        sx={{ width: 280 }}
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
      <Button onClick={handleClick} variant="contained" sx={{ margin: "10px" }}>
        Search
      </Button>
      {isCollection ? (
        <CollectionAddMovieList isCollection={isCollection} query={query} />
      ) : (
        <>
          <Box sx={{ mt: 6 }}>
            {movie && query && (
              <MoviesAlbumList isCollection={isCollection} movies={movie} />
            )}
          </Box>
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
        </>
      )}
    </Container>
  );
};

export default memo(SearchAlbumList);
