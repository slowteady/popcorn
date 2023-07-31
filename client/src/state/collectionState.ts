import { atom } from "recoil";
import { MoviesObj } from "../types/state/movies/moviesTypes";

// ----------------------------------------------------------------------
// Collection 메뉴 관련 전역 STATE
// ----------------------------------------------------------------------

export const collectionAddBoard = atom({
  key: "collectionAddBoard",
  default: [] as MoviesObj[],
});
