import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { API } from "../../../../Config";
import { getPopularMovies } from "../../../../services/movieService";
import { movieListType } from "../../../../state/movieState";
import MovieList from "./MovieList";
import MovieType from "./MovieType";

// ----------------------------------------------------------------------
// Movies 페이지
// ----------------------------------------------------------------------

const MoviesPage = () => {
  const [movie, setMovie] = useState();
  const type = useRecoilValue(movieListType);

  let url = API.BASE_URL;
  switch (type.value) {
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
    ["movieData", url],
    () => getPopularMovies(url),
    // 캐싱 유효시간 4시간
    { staleTime: 1000 * 60 * 240 }
  );

  // 무한루프 방지
  useEffect(() => {
    if (status === "success") {
      setMovie(data.payload);
    }
  }, [status, data]);

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
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <MovieType />
          </Stack>
        </Stack>

        {movie && <MovieList movies={movie} />}
      </Container>
    </>
  );
};

export default MoviesPage;
