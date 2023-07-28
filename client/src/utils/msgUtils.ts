import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

// ----------------------------------------------------------------------
// SweetAlert 사용 유틸
// ----------------------------------------------------------------------

export const msg = (icon: SweetAlertIcon, title: string): void => {
  Swal.fire({
    icon,
    title,
  });
};

export const confirmMsg = (
  icon: SweetAlertIcon,
  title: string,
  text: string
): Promise<SweetAlertResult> => {
  return Swal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    reverseButtons: true, // 버튼 순서 거꾸로
  });
};
