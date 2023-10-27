import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

interface ConfirmProps {
  icon?: SweetAlertIcon;
  text?: string;
  title: string;
}

export const customAlert = (title: string, icon: SweetAlertIcon = 'error') => {
  Swal.fire({
    icon,
    title
  });
};

export const customConfirmAlert = ({ icon = 'warning', text = '', title }: ConfirmProps): Promise<SweetAlertResult> => {
  return Swal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    reverseButtons: true
  });
};
