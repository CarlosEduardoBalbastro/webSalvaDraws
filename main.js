function mensajeForm(){
    let mens = document.getElementById('mensajeForm');

    mens.innerText = "Thank you for contacting us!";
}



document.addEventListener('DOMContentLoaded', function () {
    const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
    const body = document.body;

    modoOscuroBtn.addEventListener('click', function () {
        // Alternar la clase 'dark-mode' en el body
        body.classList.toggle('dark-mode');
    });
});