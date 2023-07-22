import { Checkbox, Grid } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { collectionCartList } from "../../../../state/movieState";
import {
  MovieListProps,
  MovieProps,
} from "../../../../types/movies/movieTypes";
import { whichContainerSize } from "../../../utils/size";
import Nodata from "../../Nodata";
import MovieCard from "./MovieCard";

// ----------------------------------------------------------------------
// Movie 리스트
// ----------------------------------------------------------------------

const MovieList = ({ movies, isCollection }: MovieListProps) => {
  const style = whichContainerSize(isCollection);
  const [checkedMovies, setCheckedMovies] = useRecoilState(collectionCartList);
  
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement>,
    movie: MovieProps
  ) => {
    e.stopPropagation();
    const isChecked = e.currentTarget.checked;

    if (isChecked) {
      setCheckedMovies((prevCheckMovies) => [...prevCheckMovies, movie]);
    } else {
      setCheckedMovies((prevCheckedMovies) =>
        prevCheckedMovies.filter((m) => m !== movie)
      );
    }
  };

  const isChecked = () => {
    checkedMovies.map((movie, index) => {
      return true;
    });
  };

  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "center" }}
        {...style.containerSize}
      >
        {movies && movies.length !== 0 ? (
          movies.map((movie, index) => {
            const isChecked = checkedMovies.some(
              (checkedMovie) => checkedMovie.id === movie.id
            );
            return (
              <Grid
                key={index}
                item
                sx={{ ...style.itemSx }}
                {...style.itemSize}
              >
                {isCollection && (
                  <Checkbox
                    onChange={(e) => handleOnChange(e, movie)}
                    checked={isChecked}
                  />
                )}
                <MovieCard isCollection={isCollection} movie={movie} />
              </Grid>
            );
          })
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
