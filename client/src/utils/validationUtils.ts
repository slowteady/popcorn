export const strCheck = {
  // 문자 있는지 검증
  isEmpty: (str: string) => {
    return str == "" || str == undefined || str == null || str == "null";
  },
  // 문자 없는지 검증
  isNotEmpty: (str: string) => {
    return !strCheck.isEmpty(str);
  },
}
