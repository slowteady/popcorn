import PendingIcon from "@mui/icons-material/Pending";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { API } from "../../../../Config";
import { getMovieData } from "../../../../services/movieService";
import { movieListType } from "../../../../state/movieState";
import { MovieListProps } from "../../../../types/movies/movieTypes";
import MovieList from "./MovieList";
import MovieType from "./MovieType";

// ----------------------------------------------------------------------
// Movies 페이지
// ----------------------------------------------------------------------

const MoviesPage = () => {
  const [movie, setMovie] = useState<MovieListProps["movies"]>([]);
  const [page, setPage] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const movieType = useRecoilValue(movieListType);

  let url = API.BASE_URL;
  switch (movieType.value) {
    case "POPULAR":
      url += API.POPULAR_PATH;
      break;
    case "NOWPLAYING":
      url += API.NOWPLAYING_PATH;
      break;
    case "TOPRATED":
      url += API.TOP_RATED;
      break;
    default:
      url += API.POPULAR_PATH;
  }

  // API 데이터 호출 및 캐싱
  const { status, data } = useQuery(
    ["movieData", url, page],
    () => getMovieData(url, page),
    { enabled }
  );

  // 초기화
  const handleMovieTypeChange = () => {
    setPage(1);
    setMovie([]);
    setIsFirstLoad(true);
  };

  useEffect(() => {
    setEnabled(true);
  }, [page]);

  useEffect(() => {
    if (status === "success") {
      setMovie((prevMovie) => [...prevMovie, ...data.payload]);
    }
  }, [data]);

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
            <MovieType onChange={handleMovieTypeChange} />
          </Stack>
        </Stack>

        {movie && <MovieList movies={movie} />}
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
    </>
  );
};

export default MoviesPage;
