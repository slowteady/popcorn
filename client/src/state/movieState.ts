import { atom } from "recoil";
import { MoviesObj } from "../types/state/movies/moviesTypes";

// ----------------------------------------------------------------------
// movies 메뉴 관련 전역 STATE
// ----------------------------------------------------------------------

// movies 메뉴 정렬 조건 관련 전역 STATE
export const moviesSortType = atom({
  key: "moviesSortType",
  default: { value: "POPULAR", label: "Popular" },
});

// 검색 시 출력되는 영화 리스트 관련 전역 STATE
export const moviesSearchList = atom<MoviesObj[]>({
  key: "moviesSearchList",
  default: [],
});
