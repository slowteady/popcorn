import { Box, Card, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { MOVIE_API } from "../../../../config/api/dataConfig";
import { MovieCardProps } from "../../../../types/movies/movieTypes";
import { whichContainerSize } from "../../../../utils/styleUtils";
import MovieModal from "./MovieModal";

// ----------------------------------------------------------------------
// Movie 카드
// ----------------------------------------------------------------------

const StyledMovieImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const MovieCard = ({ movie, isCollection }: MovieCardProps) => {
  const [open, setOpen] = useState(false);
  const { id, poster_path, release_date, title, vote_average } = movie;
  const voteAverage = (Math.round(vote_average * 10) / 10).toFixed(1);
  const posterUrl = `${MOVIE_API.IMAGE_BASE_URL}${MOVIE_API.IMAGE_SIZE_500}${poster_path}`;
  const style = whichContainerSize(isCollection);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ cursor: "pointer" }} onClick={handleModalOpen}>
        <Box sx={{ ...style.boxSx }}>
          {poster_path && <StyledMovieImg alt={title} src={posterUrl} />}
        </Box>
        <Stack spacing={2} sx={{ p: 3 }}>
          <Box color="inherit">
            <Typography
              component="div"
              title={title}
              variant="subtitle2"
              noWrap
            >
              {title}
            </Typography>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">{release_date}</Typography>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: "rgb(0,0,0,0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={15}
                fontWeight={800}
                sx={{ color: "white" }}
              >
                {voteAverage}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Card>
      <MovieModal id={id} open={open} handleClose={handleModalClose} />
    </>
  );
};

export default MovieCard;
