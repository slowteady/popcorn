import Swal, { SweetAlertIcon } from 'sweetalert2';

export const customAlert = (title: string, icon: SweetAlertIcon = 'error') => {
  Swal.fire({
    icon,
    title
  });
};
