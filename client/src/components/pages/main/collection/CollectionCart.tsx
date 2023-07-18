import { Container, TextField } from "@mui/material";
import React from "react";

const CollectionCart = () => {
  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <TextField
        required
        fullWidth
        size="small"
        sx={{ mr: 1, mb: 2 }}
      ></TextField>
    </Container>
  );
};

export default CollectionCart;
