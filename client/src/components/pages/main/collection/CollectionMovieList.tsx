import { Box, Grid } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesSearchList } from "../../../../state/movieState";
import { isCollectionProps } from "../../../../types/state/movies/moviesTypes";
import { whichContainerSize } from "../../../../utils/styleUtils";
import MovieAlbumList from "../movies/MovieAlbumList";
import CollectionAddForm from "./CollectionAddForm";

// ----------------------------------------------------------------------
// 컬렉션 영화 리스트 컴포넌트
// ----------------------------------------------------------------------

const CollectionMovieList = ({ isCollection, query }: isCollectionProps) => {
  const movie = useRecoilValue(moviesSearchList);
  const style = whichContainerSize(isCollection); // 컨테이너 사이즈

  return (
    <Grid container flexWrap="nowrap">
      <Grid item {...style.itemSize} sx={{ ...style.gridSx }}>
        <Box>
          {movie && query && (
            <MovieAlbumList isCollection={isCollection} movies={movie} />
          )}
        </Box>
      </Grid>
      <Grid item {...style.cartSize}>
        <CollectionAddForm />
      </Grid>
    </Grid>
  );
};

export default CollectionMovieList;
