import { Container, Modal } from "@mui/material";
import React from "react";
import MovieSearchPage from "../search/MovieSearchPage";
import { AddMovieModalProps } from "../../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// 영화 추가 모달 페이지
// ----------------------------------------------------------------------

const AddMovieModal = ({ open, handleClose }: AddMovieModalProps) => {
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
          <MovieSearchPage />
        </Container>
      </Modal>
    </>
  );
};

export default AddMovieModal;
