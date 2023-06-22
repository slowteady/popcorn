import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { API } from "../../../../Config";
import { movieListType } from "../../../../state/userState";
import MovieList from "./MovieList";
import MovieType from "./MovieType";

// ----------------------------------------------------------------------
// Movies 페이지
// ----------------------------------------------------------------------

const MoviesPage = () => {
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
