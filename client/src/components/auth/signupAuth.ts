import Swal from "sweetalert2";

// 비밀번호, 비밀번호 확인 일치 검증
export const validatePassword = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "비밀번호가 일치하지 않아요",
    });
    return false;
  }
  return true;
};

