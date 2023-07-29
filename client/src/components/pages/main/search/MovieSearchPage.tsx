import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { isCollectionProps } from "../../../../types/state/movies/movieTypes";
import MovieSearch from "./MovieSearch";

// ----------------------------------------------------------------------
// 영화 검색 페이지 컴포넌트
// ----------------------------------------------------------------------

const MovieSearchPage = ({ isCollection }: isCollectionProps) => {
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
      <MovieSearch isCollection={isCollection} />
    </>
  );
};

export default MovieSearchPage;
