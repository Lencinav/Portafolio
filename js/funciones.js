document.addEventListener('DOMContentLoaded', function() {
    const botonesNav = document.querySelectorAll('.navegacion-principal a');
    const menuBtn = document.querySelector('.menu-btn');
    const navegacion = document.querySelector('.navegacion-principal');

    // Agregar evento clic al botón de menú
    menuBtn.addEventListener('click', function() {
        navegacion.classList.toggle('mostrar');
    });

    // Agregar evento clic a cada elemento del menú
    botonesNav.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            const seccionId = this.getAttribute('href').substring(1);
            const seccion = document.getElementById(seccionId);
            const offset = 100;
            const posicion = seccion.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: posicion, behavior: 'smooth' });
            // Ocultar el menú después de hacer clic en un elemento
            navegacion.classList.remove('mostrar');
        });
    });
});
