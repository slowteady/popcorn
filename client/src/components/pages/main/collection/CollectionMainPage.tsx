import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Iconify from "../../../iconify/Iconify";
import CollectionMainList from "./CollectionMainList";

// ----------------------------------------------------------------------
// Collection 메인 페이지 컴포넌트
// ----------------------------------------------------------------------

const CollectionMainPage = () => {
  const navigate = useNavigate();

  const handleClickBtn = () => {
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
          mb={3}
        >
          <Typography variant="h4" gutterBottom>
            Collection
          </Typography>
          <Button
            onClick={handleClickBtn}
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Collection
          </Button>
        </Stack>
        <CollectionMainList />
      </Container>
    </>
  );
};

export default CollectionMainPage;
