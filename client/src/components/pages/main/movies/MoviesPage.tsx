import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieType from "./MovieType";

// ----------------------------------------------------------------------
// Movies 페이지
// ----------------------------------------------------------------------

const MoviesPage = () => {
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
      </Container>
    </>
  );
};

export default MoviesPage;
