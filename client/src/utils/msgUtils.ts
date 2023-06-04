import Swal, { SweetAlertIcon } from "sweetalert2";

export const msg = (icon: SweetAlertIcon, title: string): void => {
  Swal.fire({
    icon,
    title,
  });
};
