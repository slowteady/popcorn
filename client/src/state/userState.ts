import { atom } from "recoil";

export interface userDataType {
  email: string;
  image: string;
  intro: string;
  name: string;
}

export const userData = atom<userDataType | string>({
  key: "userData",
  default: "",
});

export const movieListType = atom({
  key: "movieListType",
  default: { value: "POPULAR", label: "Popular" },
});
