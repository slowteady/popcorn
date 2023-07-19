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
  const style = whichContainerSize(isCollection);

  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center" }}
        {...style.containerSize}
      >
        {movies && movies.length !== 0 ? (
          movies.map((movie, index) => (
            <Grid key={index} item sx={{ ...style.itemSx }} {...style.itemSize}>
              {isCollection && <Checkbox />}
              <MovieCard isCollection={isCollection} movie={movie} />
            </Grid>
          ))
        ) : (
          <Nodata
            msg="검색 결과가 없습니다."
            icon="material-symbols:info-outline"
            sx={{
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
            containerSx={{ p: 19 }}
          />
        )}
      </Grid>
    </>
  );
};

export default MovieList;
