import { Container, Modal, Typography } from "@mui/material";
import React from "react";
import MovieSearchPage from "../search/MovieSearchPage";
import { AddMovieModalProps } from "../../../../types/movies/movieTypes";
import { Helmet } from "react-helmet-async";

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
      <MovieSearchPage />
    </>
  );
};

export default AddCollectionPage;
