// ----------------------------------------------------------------------
// 값 유효 검사 유틸
// ----------------------------------------------------------------------
export const strCheck = {
  // 값이 무효한지 검증
  isEmpty: (str: string | boolean) => {
    return (
      str === "" ||
      str === undefined ||
      str === null ||
      str === "null" ||
      (typeof str === "string" && str.trim() === "")
    );
  },
  // 값이 유효한지 검증
  isNotEmpty: (str: string | boolean) => {
    return !strCheck.isEmpty(str);
  },
};
