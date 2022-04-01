import Swal from 'sweetalert2'

export const sweetAlertConfirm = async () => {
  const alerta = Swal.fire({
    title: 'Estas Seguro?',
    text: 'Si lo borras, no podras recuperarlo!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar!',
  })

  const response = await alerta

  if (response.isConfirmed) {
    Swal.fire('Eliminado!', 'Se elimino correctamente.', 'success')
  }

  return response.isConfirmed
}
