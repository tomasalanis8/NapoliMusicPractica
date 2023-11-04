const scriptURL = "https://script.google.com/macros/s/AKfycbylJ4rI7o8uH4NaPXZ0UOJ_bqNWDeQXMmKmHXEk9CApESXLrsNqGl1h6sMsrdyqVv63kw/exec"
let timerInterval;

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form[name='contact-form']");
    var submitButton = document.querySelector("#submit");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
      Swal.fire({
        title: 'Son estos datos correctos?',
        text: "Revisa que los datos sean correctos",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Si, enviar!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})

            let timerInterval
            Swal.fire({
            title: 'Todo listo!',
            html: 'Revisa tu bandeja de Mail para buscar tu link de pago',
            timer: 5000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
            },
            willClose: () => {
            clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              window.location.href = "index.html";
            }
          })
          }
        })
      })
})