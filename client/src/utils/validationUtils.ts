// ----------------------------------------------------------------------
// 문자 유효성 검사 유틸
// ----------------------------------------------------------------------
export const strCheck = {
  // 문자 있는지 검증
  isEmpty: (str: string) => {
    return (
      str === "" ||
      str === undefined ||
      str === null ||
      str === "null" ||
      str.trim() === ""
    );
  },
  // 문자 없는지 검증
  isNotEmpty: (str: string) => {
    return !strCheck.isEmpty(str);
  },
};
