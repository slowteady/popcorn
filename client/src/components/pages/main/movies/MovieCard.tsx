import { Box, Card, Link, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { API } from "../../../../Config";
import { MovieCardProps } from "../../../../types/movies/movieTypes";

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

const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, poster_path, release_date, title, genre_ids } = movie;
  const posterUrl = `${API.IMAGE_BASE_URL}${API.IMAGE_SIZE_300}${poster_path}`;

  return (
    <Card>
      <Box sx={{ minHeight: "300px", position: "relative" }}>
        {poster_path && <StyledMovieImg alt={title} src={posterUrl} />}
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography component="div" title={title} variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">{release_date}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default MovieCard;
