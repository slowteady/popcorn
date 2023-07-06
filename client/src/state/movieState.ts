import { atom } from "recoil";
import { MovieListProps } from "../types/movies/movieTypes";

export const movieListType = atom({
  key: "movieListType",
  default: { value: "POPULAR", label: "Popular" },
});

export const moviesSearchList = atom({
  key: "moviesSearchList",
  default: [] as MovieListProps["movies"],
});
