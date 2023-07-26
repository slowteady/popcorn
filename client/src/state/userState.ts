import { atom } from "recoil";

export interface userDataType {
  id: string;
  email: string;
  image: string;
  intro: string;
  name: string;
}

export const userData = atom<userDataType>({
  key: "userData",
  default: { email: "", image: "", intro: "", name: "", id: "" },
});
