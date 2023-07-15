import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Iconify from "../../../iconify/Iconify";
import AddMovieModal from "./AddMovieModal";
import { useSetRecoilState } from "recoil";
import { isCollectionPage } from "../../../../state/movieState";

// ----------------------------------------------------------------------
// Collection 페이지
// ----------------------------------------------------------------------

const CollectionPage = () => {
  const [open, setOpen] = useState(false);
  const setIsCollection = useSetRecoilState(isCollectionPage);
  const handleModalOpen = () => {
    setOpen(true);
    setIsCollection(true);
  };
  const handleModalClose = () => {
    setOpen(false);
    setIsCollection(false);
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
        <AddMovieModal open={open} handleClose={handleModalClose} />
      </Container>
    </>
  );
};

export default CollectionPage;
