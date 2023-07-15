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

// Collection 페이지 여부
export const isCollectionPage = atom({
  key: "isCollectionPage",
  default: false,
});
