document.getElementById("butAvisarme").addEventListener("click", function() {
    var respuesta = prompt("Escribe algo:");
    if (respuesta !== null) {
        alert("Escribiste: " + respuesta);
    }
});
