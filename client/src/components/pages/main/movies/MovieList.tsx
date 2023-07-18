import { Checkbox, Grid } from "@mui/material";
import React from "react";
import { MovieListProps } from "../../../../types/movies/movieTypes";
import { whichContainerSize } from "../../../utils/size";
import Nodata from "../../Nodata";
import MovieCard from "./MovieCard";

// ----------------------------------------------------------------------
// Movie 리스트
// ----------------------------------------------------------------------

const MovieList = ({ movies, isCollection }: MovieListProps) => {
  const size = whichContainerSize(isCollection);

  return (
    <>
      <Grid container {...size.containerSize}>
        {movies && movies.length !== 0 ? (
          movies.map((movie, index) => (
            <Grid key={index} item {...size.itemSize}>
              {isCollection && <Checkbox />}
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Nodata
            msg="검색 결과가 없습니다."
            icon="material-symbols:info-outline"
            sx={{ height: "100%", width: "100%", textAlign: "center" }}
            containerSx={{ mt: 25 }}
          />
        )}
      </Grid>
    </>
  );
};

export default MovieList;
