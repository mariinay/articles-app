import Swal from "sweetalert2";

export const showMessage = (message, icon, position, showConfirmButton, timer=null) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: message,
        showConfirmButton: showConfirmButton,
        timer: timer
      })
}