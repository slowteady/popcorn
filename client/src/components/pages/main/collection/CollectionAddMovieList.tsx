import { Box, Grid } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { moviesSearchList } from "../../../../state/movieState";
import { CollectionAddMovieListProps } from "../../../../types/state/collection/collectionTypes";
import { whichContainerSize } from "../../../../utils/styleUtils";
import MoviesAlbumList from "../movies/MoviesAlbumList";
import CollectionAddForm from "./CollectionAddForm";

// ----------------------------------------------------------------------
// 컬렉션 생성 페이지 영화 리스트 컴포넌트
// ----------------------------------------------------------------------

const CollectionAddMovieList = ({
  isCollection,
  query,
}: CollectionAddMovieListProps) => {
  const movie = useRecoilValue(moviesSearchList);
  const style = whichContainerSize(isCollection); // 컨테이너 사이즈

  return (
    <Grid container flexWrap="nowrap">
      <Grid item {...style.itemSize} sx={{ ...style.gridSx }}>
        <Box>
          {movie && query && (
            <MoviesAlbumList isCollection={isCollection} movies={movie} />
          )}
        </Box>
      </Grid>
      <Grid item {...style.cartSize}>
        <CollectionAddForm />
      </Grid>
    </Grid>
  );
};

export default CollectionAddMovieList;
