import { atom } from "recoil";
import { MovieAlbumListProps, MoviesObj } from "../types/state/movies/moviesTypes";

// ----------------------------------------------------------------------
// movies 메뉴 관련 전역 STATE
// ----------------------------------------------------------------------

export const moviesSortType = atom({
  key: "moviesSortType",
  default: { value: "POPULAR", label: "Popular" },
});

export const moviesSearchList = atom({
  key: "moviesSearchList",
  default: [] as MovieAlbumListProps["movies"],
});

export const collectionCartList = atom({
  key: "collectionCartList",
  default: [] as MoviesObj[],
});
