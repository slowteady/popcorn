import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { MOVIE_API } from "../../../../config/api/dataConfig";
import { getMovieDetailData } from "../../../../services/movieService";
import { MovieDetailTypography } from "../../../../theme/typography";
import { MovieDetailProps } from "../../../../types/movies/movieTypes";

// ----------------------------------------------------------------------
// 세부영화 모달 페이지
// ----------------------------------------------------------------------

const StyledMovieImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  borderRadius: "3%",
});

interface ModalPageProps {
  id: number | null;
}

const MovieModalPage = ({ id }: ModalPageProps) => {
  const [movie, setMovie] = useState<MovieDetailProps["movie"]>();
  const url = `${MOVIE_API.BASE_URL}movie/${id}`;
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
    posterUrl = `${MOVIE_API.IMAGE_BASE_URL}${MOVIE_API.IMAGE_SIZE_300}${movie.poster_path}`;
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ minHeight: 475, position: "relative" }}>
            {movie && movie.poster_path && (
              <StyledMovieImg alt={movie.title} src={posterUrl} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* 영화, 감독, 배우, 릴리즈 날짜, 장르, 상영시간, 평점, 태그 */}
          <Typography variant="h6" noWrap>
            제목
          </Typography>
          {movie && movie.title && (
            <MovieDetailTypography title={movie.title}>
              {movie.title}
            </MovieDetailTypography>
          )}
          <Typography variant="h6" noWrap>
            감독
          </Typography>
          {movie &&
            movie.director &&
            movie.director.map((director, index) => (
              <MovieDetailTypography key={index}>
                {director}
              </MovieDetailTypography>
            ))}
          <Typography variant="h6" noWrap>
            배우
          </Typography>
          {movie &&
            movie.actor &&
            movie.actor.map((actor, index) => (
              <MovieDetailTypography key={index}>{actor}</MovieDetailTypography>
            ))}
          <Typography variant="h6" noWrap>
            릴리즈
          </Typography>
          {movie && movie.release_date && (
            <MovieDetailTypography>{movie.release_date}</MovieDetailTypography>
          )}
          <Typography variant="h6" noWrap>
            장르
          </Typography>
          {movie &&
            movie.genres &&
            movie.genres.map((genre, index) => (
              <MovieDetailTypography key={index}>{genre}</MovieDetailTypography>
            ))}
          <Typography variant="h6" noWrap>
            상영시간
          </Typography>
          {movie && movie.runtime && (
            <MovieDetailTypography>{movie.runtime} 분</MovieDetailTypography>
          )}
          <Typography variant="h6" noWrap>
            태그
          </Typography>
          {movie && movie.tagline && (
            <Typography
              sx={{
                mb: "2px",
                mt: "2px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              fontSize={14}
              title={movie.tagline}
            >
              {movie.tagline}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default MovieModalPage;
