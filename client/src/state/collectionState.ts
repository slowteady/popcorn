import { atom } from "recoil";
import { CollectionDetailData } from "../types/state/collection/collectionTypes";
import { MoviesObj } from "../types/state/movies/moviesTypes";

// ----------------------------------------------------------------------
// Collection 메뉴 관련 전역 STATE
// ----------------------------------------------------------------------

// 컬렉션 생성 시 리스트를 위한 전역 STATE
export const collectionAddMovie = atom<MoviesObj[]>({
  key: "collectionAddMovie",
  default: [],
});

// 컬렉션 디테일 페이지를 위한 전역 STATE
export const collectionDetailData = atom<CollectionDetailData>({
  key: "collectionDetailData",
  default: { authUserId: "", collectionTitle: "" },
});
