export const strCheck = {
  isEmpty: (str: string) => {
    return str == "" || str == undefined || str == null || str == "null";
  },
  isNotEmpty: (str: string) => {
    return !strCheck.isEmpty(str);
  },
}