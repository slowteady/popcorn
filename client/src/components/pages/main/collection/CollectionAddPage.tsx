import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { collectionCartList } from "../../../../state/movieState";
import Iconify from "../../../iconify/Iconify";
import MovieSearchPage from "../search/MovieSearchPage";

// ----------------------------------------------------------------------
// 영화 콜렉션 추가 페이지 컴포넌트
// ----------------------------------------------------------------------

const CollectionAddPage = () => {
  const setCollectionCartList = useSetRecoilState(collectionCartList);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 초기 렌더링 여부
  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstLoad) {
      setCollectionCartList([]);
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  const handleListBtn = () => {
    navigate("/main/collection");
  };
  
  return (
    <>
      <Helmet>
        <title> Collection | POPCORN! </title>
      </Helmet>

      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" gutterBottom>
            Collection
          </Typography>
          <Button
            onClick={handleListBtn}
            variant="contained"
            startIcon={<Iconify icon="ph:list-fill" />}
            sx={{ backgroundColor: "#3e4857" }}
          >
            List
          </Button>
        </Stack>
      </Container>
      <MovieSearchPage isCollection={true} />
    </>
  );
};

export default CollectionAddPage;
