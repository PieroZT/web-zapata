document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // CARRUSEL DE IMÁGENES
    // ==========================

    const diapositivas = document.querySelectorAll(".diapositiva");
    const indicadores = document.querySelectorAll(".indicador");
    const botonAnterior = document.querySelector(".anterior");
    const botonSiguiente = document.querySelector(".siguiente");

    let indiceActual = 0;
    let temporizador;

    function mostrarDiapositiva(nuevoIndice) {
        diapositivas[indiceActual].classList.remove("activa");
        indicadores[indiceActual].classList.remove("activo");

        indiceActual =
            (nuevoIndice + diapositivas.length) % diapositivas.length;

        diapositivas[indiceActual].classList.add("activa");
        indicadores[indiceActual].classList.add("activo");
    }

    function siguiente() {
        mostrarDiapositiva(indiceActual + 1);
    }

    function anterior() {
        mostrarDiapositiva(indiceActual - 1);
    }

    function reiniciarTemporizador() {
        clearInterval(temporizador);
        temporizador = setInterval(siguiente, 3000);
    }

    botonSiguiente.addEventListener("click", function () {
        siguiente();
        reiniciarTemporizador();
    });

    botonAnterior.addEventListener("click", function () {
        anterior();
        reiniciarTemporizador();
    });

    reiniciarTemporizador();
});
