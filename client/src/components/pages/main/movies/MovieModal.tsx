import { Box, Container, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import ModalPage from "./ModalPage";

// ----------------------------------------------------------------------
// Movie 모달
// ----------------------------------------------------------------------

interface MovieModalProps {
  open: boolean;
  handleClose: () => void;
  id: number;
}

const MovieModal = ({ id, open, handleClose }: MovieModalProps) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            maxWidth: {
              xs: 444,
              sm: 600,
            },
          }}
        >
          <ModalPage id={id} />
        </Container>
      </Modal>
    </>
  );
};

export default MovieModal;
