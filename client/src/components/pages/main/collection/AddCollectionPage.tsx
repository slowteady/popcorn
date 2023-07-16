import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieSearchPage from "../search/MovieSearchPage";

// ----------------------------------------------------------------------
// 영화 콜렉션 추가 페이지
// ----------------------------------------------------------------------

const AddCollectionPage = () => {
  return (
    <>
      <Helmet>
        <title> Collection | POPCORN! </title>
      </Helmet>

      <Container>
        <Typography variant="h4" gutterBottom>
          Collection
        </Typography>
      </Container>
      <MovieSearchPage isCollection={true} />
    </>
  );
};

export default AddCollectionPage;
