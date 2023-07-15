import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import Iconify from "../../../iconify/Iconify";

const CollectionPage = () => {
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
          >
            New Collection
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default CollectionPage;
