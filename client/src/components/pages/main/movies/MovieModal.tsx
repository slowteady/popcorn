import { Container, Modal } from "@mui/material";
import React from "react";
import MovieModalPage from "./MovieModalPage";

// ----------------------------------------------------------------------
// 세부영화 모달 레이아웃
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
            bgcolor: "#f9f6f6",
            border: "1px solid rgb(0, 0, 0, 0.8)",
            borderRadius: "2%",
            boxShadow: 24,
            p: 4,
            maxWidth: {
              xs: 444,
              sm: 600,
            },
          }}
        >
          <MovieModalPage id={id} />
        </Container>
      </Modal>
    </>
  );
};

export default MovieModal;
