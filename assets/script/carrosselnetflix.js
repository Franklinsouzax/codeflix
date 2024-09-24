let currentIndex = 3; // Começa na quarta imagem para desktop
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const dotsContainer = document.querySelector('.dots');

// Cria as bolinhas dinamicamente
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);

    // Adiciona evento de clique
    dot.addEventListener('click', () => {
        currentIndex = i; // Atualiza o índice
        updateHighlight();
        moveCarousel(); // Atualiza a posição do carrossel
    });
}

// Atualiza o destaque da imagem
function updateHighlight() {
    items.forEach((item) => {
        item.classList.remove('active');
        item.style.opacity = '0.5';
    });

    items[currentIndex].classList.add('active');
    items[currentIndex].style.opacity = '1';

    // Atualiza as bolinhas
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Move o carrossel
function moveCarousel() {
    if (window.innerWidth <= 768) {
        // Mobile: mostra apenas a imagem atual
        items.forEach((item, index) => {
            item.style.display = (index === currentIndex) ? 'block' : 'none';
        });
    } else {
        // Desktop: usa a transformação
        const offset = -currentIndex * (100 / (totalItems - 1));
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        items.forEach(item => item.style.display = 'flex'); // Garante que as imagens sejam exibidas
    }
}

// Função para mudar o destaque
function moveHighlight(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalItems) {
        currentIndex = totalItems - 1;
    }

    updateHighlight();
    moveCarousel();
}

// Inicializa o carrossel
updateHighlight();
moveCarousel();

// Adicione event listeners aos botões
document.querySelector('.prev').addEventListener('click', () => moveHighlight(-1));
document.querySelector('.next').addEventListener('click', () => moveHighlight(1));

// Inicia a movimentação automática a cada 3 segundos
setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 3; // Volta para a quarta imagem
    }
    updateHighlight();
    moveCarousel();
}, 3000);

// Adiciona um listener para verificar a largura da tela ao redimensionar
window.addEventListener('resize', moveCarousel);
