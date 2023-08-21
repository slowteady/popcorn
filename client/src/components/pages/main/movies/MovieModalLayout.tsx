import { Container, Modal } from "@mui/material";
import React, { memo } from "react";
import { MovieModalLayoutProps } from "../../../../types/state/movies/moviesTypes";
import MovieModalPage from "./MovieModalPage";

// ----------------------------------------------------------------------
// 세부영화 모달 레이아웃 컴포넌트
// ----------------------------------------------------------------------

const MovieModalLayout = ({ id, open, handleClose }: MovieModalLayoutProps) => {
  return (
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
          mx: 4,
          overflow: "auto",
          maxWidth: {
            xs: 444,
            sm: 600,
          },
          maxHeight: {
            xs: 600,
          },
        }}
      >
        <MovieModalPage id={id} />
      </Container>
    </Modal>
  );
};

export default memo(MovieModalLayout);
