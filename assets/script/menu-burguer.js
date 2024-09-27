const burgerMenu = document.getElementById("burger-menu");
const balloonMenu = document.getElementById("balloon-menu");

burgerMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Previne o clique de propagar
    toggleMenu();
});

document.addEventListener("click", () => {
    if (balloonMenu.classList.contains("show")) {
        balloonMenu.classList.remove("show"); // Remove a classe ao fechar
        setTimeout(() => {
            balloonMenu.style.display = "none"; // Define como não visível após a transição
        }, 500); // Tempo deve ser igual ao da transição
    }
});

function toggleMenu() {
    if (balloonMenu.classList.contains("show")) {
        balloonMenu.classList.remove("show"); // Fecha o menu
        setTimeout(() => {
            balloonMenu.style.display = "none"; // Define como não visível
        }, 500); // Tempo deve ser igual ao da transição
    } else {
        balloonMenu.style.display = "block"; // Torna visível
        setTimeout(() => {
            balloonMenu.classList.add("show"); // Adiciona a classe para fade-in
        }, 10); // Pequeno atraso para permitir a transição
    }
}

