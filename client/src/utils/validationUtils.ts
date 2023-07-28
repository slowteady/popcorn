// ----------------------------------------------------------------------
// 유효성 검사 유틸
// ----------------------------------------------------------------------

export const strCheck = {
  // 값이 비어있는지 검증
  isEmpty: (str: string | boolean) => {
    return (
      str === "" ||
      str === undefined ||
      str === null ||
      str === "null" ||
      (typeof str === "string" && str.trim() === "")
    );
  },

  // 값이 비어있지 않은지 검증
  isNotEmpty: (str: string | boolean) => {
    return !strCheck.isEmpty(str);
  },
};
