import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useNavigate } from "react-router-dom";
import Iconify from "../../../iconify/Iconify";

// ----------------------------------------------------------------------
// Collection 페이지
// ----------------------------------------------------------------------

const CollectionPage = () => {
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsAdd(true);
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
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleModalOpen}
          >
            New Collection
          </Button>
        </Stack>
      </Container>
      {isAdd && <Navigate to="/main/collection/add" />}
    </>
  );
};

export default CollectionPage;
