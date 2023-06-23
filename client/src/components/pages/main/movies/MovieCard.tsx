import { styled } from "@mui/material";
import React from "react";
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
  
  return <div>MovieCard</div>;
};

export default MovieCard;
