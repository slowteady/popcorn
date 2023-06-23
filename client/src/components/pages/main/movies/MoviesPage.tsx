import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { API } from "../../../../Config";
import { getPopularMovies } from "../../../../services/movieService";
import { movieListType } from "../../../../state/movieState";
import MovieList from "./MovieList";
import MovieType from "./MovieType";
import { useQuery } from "react-query";

// ----------------------------------------------------------------------
// Movies 페이지
// ----------------------------------------------------------------------

const MoviesPage = () => {
  console.log(1);
  const type = useRecoilValue(movieListType);

  let url = API.BASE_URL;
  switch (type.value) {
    case "POPULAR":
      url += API.POPULAR_PATH;
      break;
    case "NOWPLAYING":
      url += API.NOWPLAYING_PATH;
      break;
    case "UPCOMING":
      url += API.UPCOMING;
      break;
    default:
      url += API.POPULAR_PATH;
  }

  // id, poster_path, release_date, title, genre_ids
  const { data } = useQuery(["movieData"], () => getPopularMovies(url));
  if (data && data.payload.isSuccess) {
    const { id, poster_path, release_date, title, genre_ids } = data.payload;
    console.log(id, poster_path, release_date, title, genre_ids);
  }

  // useEffect(() => {
  //   const movies = async () => {
  //     // 서비스 로직에 url 전달
  //     const result = await getPopularMovies(url);
  //   };
  //   movies();
  // }, [type]);

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

        <MovieList />
      </Container>
    </>
  );
};

export default MoviesPage;
