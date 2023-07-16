import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieSearch from "./MovieSearch";

interface MovieSearchPageProps {
  isCollection: boolean;
}

const MovieSearchPage = ({ isCollection }: MovieSearchPageProps) => {
  return (
    <>
      {isCollection ? (
        <>
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Typography variant="h4" color="#5e8c71">
                컬렉션을 만들어보세요 😀
              </Typography>
            </Stack>
          </Container>
        </>
      ) : (
        <>
          <Helmet>
            <title> Search | POPCORN! </title>
          </Helmet>
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Typography variant="h4" gutterBottom>
                Search
              </Typography>
            </Stack>
          </Container>
        </>
      )}
      <MovieSearch />
    </>
  );
};

export default MovieSearchPage;
