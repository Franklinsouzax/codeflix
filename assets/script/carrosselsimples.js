let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelector('.carousel-dots');
    
    // Mostrar slides
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'flex' : 'none';
    });

    // Atualizar os pontos
    dots.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => currentSlide(i);
        dots.appendChild(dot);
    }

    // Marcar o ponto ativo
    if (dots.children[slideIndex]) {
        dots.children[slideIndex].classList.add('active-simple');
    }

    // Avançar para o próximo slide
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;

    // Mudar a cada 3 segundos
    setTimeout(showSlides, 3000);
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
