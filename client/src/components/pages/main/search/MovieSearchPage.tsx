import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { isCollectionPage } from "../../../../state/movieState";
import MovieSearch from "./MovieSearch";

const MovieSearchPage = () => {
  const isCollection = useRecoilValue(isCollectionPage); // 컬렉션 페이지 여부

  return (
    <>
      {!isCollection && (
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
        </>
      )}
      <MovieSearch />
    </>
  );
};

export default MovieSearchPage;
