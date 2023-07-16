import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieSearch from "./MovieSearch";

const MovieSearchPage = () => {
  return (
    <>
      <Helmet>
        <title> Search | POPCORN! </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Search
          </Typography>
        </Stack>
      </Container>
      <MovieSearch />
    </>
  );
};

export default MovieSearchPage;
