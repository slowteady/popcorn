import { Grid } from "@mui/material";
import React from "react";
import { MovieListProps } from "../../../../types/movies/movieTypes";
import Nodata from "../../Nodata";
import MovieCard from "./MovieCard";

// ----------------------------------------------------------------------
// Movie 리스트
// ----------------------------------------------------------------------

const whichCategory = (isCollection: boolean) => {
  return isCollection
    ? {
        container: { spacing: 3, sx: { maxWidth: "50%" } },
        item: { xs: 6, sm: 3 },
      }
    : {
        container: { spacing: 3 },
        item: { xs: 12, sm: 6 },
      };
};

const MovieList = ({ movies, isCollection }: MovieListProps) => {
  const isCol = whichCategory(isCollection);

  return movies && movies.length !== 0 ? (
    <Grid container spacing={3}>
      {movies.map((movie, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Nodata
      msg="검색 결과가 없습니다."
      icon="material-symbols:info-outline"
      sx={{ height: "100%", width: "100%", textAlign: "center" }}
      containerSx={{ mt: 25 }}
    />
  );
};

export default MovieList;
