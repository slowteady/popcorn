import { Container, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useSetRecoilState } from "recoil";
import { collectionCartList } from "../../../../state/movieState";
import MovieSearchPage from "../search/MovieSearchPage";

// ----------------------------------------------------------------------
// 영화 콜렉션 추가 페이지
// ----------------------------------------------------------------------

const CollectionAddPage = () => {
  const setCollectionCartList = useSetRecoilState(collectionCartList);

  setCollectionCartList([]);

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

export default CollectionAddPage;
