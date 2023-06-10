import Swal, { SweetAlertIcon } from "sweetalert2";

// ----------------------------------------------------------------------
// Alert 사용 유틸
// ----------------------------------------------------------------------

export const msg = (icon: SweetAlertIcon, title: string): void => {
  Swal.fire({
    icon,
    title,
  });
};
