import { atom } from "recoil";

export interface userDataType {
  email: string;
  image: string;
  intro: string;
  name: string;
}

export const userData = atom<userDataType | string>({
  key: "userData",
  default: { email: "", image: "", intro: "", name: "" },
});
