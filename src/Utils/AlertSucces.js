import  { Modal } from './AlertsProps'

export const AlertSucces = (values, setSubmitting) => {
    let timerInterval;
    Modal.fire({
      title: "Registrando Usuario!",
      html: "Esta ventana se cierra automaticamente",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Modal.showLoading();
        timerInterval = setInterval(() => {;
        }, 50);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Modal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    //Submitting values de formik
    setTimeout(() => {
      console.log("Singuping in", values);
      setSubmitting(false);
    }, 500);
}
<
