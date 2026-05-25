document.addEventListener("DOMContentLoaded", () => {
    const botonMenu = document.querySelector('.menu-movil');
    const enlacesNav = document.querySelector('.nav-links');

    if (botonMenu && enlacesNav) {
        botonMenu.addEventListener('click', () => {
            enlacesNav.classList.toggle('activo');
            
            // Animación del ícono
            if (enlacesNav.classList.contains('activo')) {
                botonMenu.textContent = '✕';
            } else {
                botonMenu.textContent = '☰';
            }
        });
    }
});