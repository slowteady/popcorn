import { Box, Grid } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesSearchList } from "../../../../state/movieState";
import { isCollectionProps } from "../../../../types/movies/movieTypes";
import { whichContainerSize } from "../../../utils/size";
import MovieList from "../movies/MovieList";
import CollectionCart from "./CollectionCart";

const CollectionMovieList = ({ isCollection, query }: isCollectionProps) => {
  const movie = useRecoilValue(moviesSearchList);
  const style = whichContainerSize(isCollection); // 컨테이너 사이즈

  return (
    <Grid container flexWrap="nowrap">
      <Grid item {...style.itemSize} sx={{ ...style.sx }}>
        <Box sx={{ mt: 6 }}>
          {movie && query && (
            <MovieList isCollection={isCollection} movies={movie} />
          )}
        </Box>
      </Grid>
      <Grid item {...style.cartSize}>
        <CollectionCart />
      </Grid>
    </Grid>
  );
};

export default CollectionMovieList;
