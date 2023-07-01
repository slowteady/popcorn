import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../../../Config";
import { getMovieDetailData } from "../../../../services/movieService";
import { MovieDetailProps } from "../../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// 모달 페이지
// ----------------------------------------------------------------------

const StyledMovieImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  borderRadius: "3%",
});

interface ModalPageProps {
  id: number;
}

const MovieModalPage = ({ id }: ModalPageProps) => {
  const [movie, setMovie] = useState<MovieDetailProps["movie"]>();
  const url = `${API.BASE_URL}movie/${id}`;
  const { status, data } = useQuery(["movieDetailData", url], () =>
    getMovieDetailData(url)
  );

  useEffect(() => {
    if (
      status === "success" &&
      data.payload.isSuccess &&
      "movie" in data.payload
    ) {
      setMovie({ ...data.payload.movie });
    }
  }, [data]);

  let posterUrl = "";
  if (movie) {
    posterUrl = `${API.IMAGE_BASE_URL}${API.IMAGE_SIZE_300}${movie.poster_path}`;
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ minHeight: 400, position: "relative" }}>
            {movie && movie.poster_path && (
              <StyledMovieImg alt={movie.title} src={posterUrl} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* 영화, 감독, 배우, 릴리즈 날짜, 장르, 상영시간, 평점, 태그 */}
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
          <Typography variant="h6" noWrap sx={{ mb: "10px" }}>
            asd
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieModalPage;
