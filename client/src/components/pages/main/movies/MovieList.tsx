import { Checkbox, Grid } from "@mui/material";
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
        containerSize: { spacing: 3, sx: { maxWidth: "50%" } },
        size: { xs: 12, sm: 6 },
      }
    : {
        containerSize: { spacing: 3 },
        size: { xs: 12, sm: 6, md: 3 },
      };
};

const MovieList = ({ movies, isCollection }: MovieListProps) => {
  const isCol = whichCategory(isCollection);

  return movies && movies.length !== 0 ? (
    <Grid container {...isCol.containerSize}>
      {movies.map((movie, index) => (
        <Grid key={index} item {...isCol.size}>
          {isCollection && <Checkbox />}
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
