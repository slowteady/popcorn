import { Grid } from "@mui/material";
import React from "react";
import { MovieListProps } from "../../../../types/movies/movieTypes";
import MovieCard from "./MovieCard";

// ----------------------------------------------------------------------
// Movie 리스트 페이지
// ----------------------------------------------------------------------

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
