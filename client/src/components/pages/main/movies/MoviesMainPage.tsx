import PendingIcon from "@mui/icons-material/Pending";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { MOVIE_API } from "../../../../config/api/dataConfig";
import { getMovieData } from "../../../../services/movieService";
import { moviesSortType } from "../../../../state/movieState";
import { MoviesObj } from "../../../../types/state/movies/moviesTypes";
import MoviesAlbumList from "./MoviesAlbumList";
import MoviesSortBox from "./MoviesSortBox";

// ----------------------------------------------------------------------
// Movies 메인 페이지 컴포넌트
// ----------------------------------------------------------------------

const MoviesMainPage = () => {
  const sortType = useRecoilValue(moviesSortType); // 정렬 조건
  const [movies, setMovies] = useState<MoviesObj[]>([]); // 영화 state
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [enabled, setEnabled] = useState(false);

  let url = MOVIE_API.BASE_URL;
  switch (sortType.value) {
    case "POPULAR":
      url += MOVIE_API.POPULAR_PATH;
      break;
    case "NOWPLAYING":
      url += MOVIE_API.NOWPLAYING_PATH;
      break;
    case "TOPRATED":
      url += MOVIE_API.TOP_RATED;
      break;
    default:
      url += MOVIE_API.POPULAR_PATH;
  }

  // API 데이터 호출 및 캐싱
  const { status } = useQuery(
    ["movieData", url, page],
    () => getMovieData(url, page),
    {
      onSuccess: (data) => {
        setMovies((prevMovie) => [...prevMovie, ...data.payload]);
      },
      enabled,
    }
  );

  useEffect(() => {
    setEnabled(true);
  }, [page]);

  // 정렬 조건 바뀔 시 초기화
  const handleMoviesSortType = useCallback(() => {
    setPage(1);
    setMovies([]);
    setIsFirstLoad(true);
  }, [page, movies, isFirstLoad]);

  // 스크롤
  const handleScroll = (inView: boolean) => {
    // 초기 렌더링 시 로직 두번 타는 거 방지
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    if (inView && page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title> Movies | POPCORN! </title>
      </Helmet>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Movies
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          mb={3}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <MoviesSortBox onChange={handleMoviesSortType} />
          </Stack>
        </Stack>

        {movies && <MoviesAlbumList isCollection={false} movies={movies} />}

        <InView onChange={handleScroll}>
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
    </>
  );
};

export default MoviesMainPage;
