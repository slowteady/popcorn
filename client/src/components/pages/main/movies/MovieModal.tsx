import { Box, Modal } from "@mui/material";
import React from "react";
import { MovieCardProps } from "../../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// Movie 모달
// ----------------------------------------------------------------------

interface MovieModalProps extends MovieCardProps {
  open: boolean;
  handleClose: () => void;
}

const MovieModal = ({ movie, open, handleClose }: MovieModalProps) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: {
              xs: "200px",
              sm: "400px",
              md: "600px",
            },
            minHeight: {
              xs: "300px",
              sm: "500px",
              md: "600px",
            },
          }}
        ></Box>
      </Modal>
    </>
  );
};

export default MovieModal;
