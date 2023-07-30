import { atom } from "recoil";
import { userDataType } from "../types/state/users/userDataTypes";

// ----------------------------------------------------------------------
// 사용자 관련 전역 STATE
// ----------------------------------------------------------------------

export const userData = atom<userDataType>({
  key: "userData",
  default: { email: "", image: "", intro: "", name: "", id: "" },
});
