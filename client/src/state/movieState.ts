import { atom } from "recoil";

export const movieListType = atom({
  key: "movieListType",
  default: { value: "POPULAR", label: "Popular" },
});
