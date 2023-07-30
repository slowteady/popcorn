import { atom } from "recoil";

// ----------------------------------------------------------------------
// 검색 관련 전역 STATE
// ----------------------------------------------------------------------

export const searchKeyword = atom({
  key: "searchKeyword",
  default: "",
});