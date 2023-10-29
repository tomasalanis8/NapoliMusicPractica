const scriptURL = "https://script.google.com/macros/s/AKfycbylJ4rI7o8uH4NaPXZ0UOJ_bqNWDeQXMmKmHXEk9CApESXLrsNqGl1h6sMsrdyqVv63kw/exec"

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form[name='contact-form']");
    var submitButton = document.querySelector("#submit");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
  
      // Muestra un mensaje emergente
      var confirmation = confirm("¿Quieres recibir el link de pago?");
  
      if (confirmation) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        alert("Gracias! Revisa tu bandeja de gmail para adquirir tu entrada");
        // Redirige a la página index.html
        window.location.href = "index.html";
      }
    });
  });

  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
  
    function animate(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutQuart(progress);
      window.scrollTo(0, startPosition + distance * ease);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    }
  
    function easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    }
  
    requestAnimationFrame(animate);
  }
  
  // Uso: Llama a esta función con el selector del elemento al que deseas deslizar y la duración en milisegundos.
  smoothScroll('#elemento', 1000);
  