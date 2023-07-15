import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Iconify from "../../../iconify/Iconify";
import { useSetRecoilState } from "recoil";
import { isCollectionPage } from "../../../../state/movieState";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
// Collection 페이지
// ----------------------------------------------------------------------

const CollectionPage = () => {
  const setIsCollection = useSetRecoilState(isCollectionPage);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsCollection(true);
    navigate("/main/collection/add");
  };

  return (
    <>
      <Helmet>
        <title> Collection | POPCORN! </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Collection
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleModalOpen}
          >
            New Collection
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default CollectionPage;
