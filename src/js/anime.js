document.addEventListener('DOMContentLoaded', () => {
  // Inicializa AOS (Animate On Scroll)
  AOS.init({
    duration: 1000, // Duração da animação
    easing: 'ease-in-out',
    once: true, // Animação executada apenas uma vez
  });

  // Animação com Anime.js
  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml15 .word',
      scale: [14, 1],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      duration: 800,
      delay: (el, i) => 800 * i,
    })
    .add({
      targets: '.ml15',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000,
    });

  // Função para animar o carregamento inicial
  const handleLoadingAnimation = () => {
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loading-text');
    const body = document.querySelector('body');

    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loading.style.opacity = '0'; // Animação de fade out
          setTimeout(() => {
            loading.style.display = 'none'; // Oculta o elemento após a animação
            body.classList.remove('no-scroll'); // Remove a classe que impede o scroll
            typeText(); // Inicia a digitação após a tela de carregamento desaparecer
          }, 500); // Duração da animação de fade out
        }, 500); // Tempo adicional para garantir que o progresso seja mostrado
      } else {
        progress++;
        loadingText.innerText = `${progress}%`;
      }
    }, 10);
  };

  // Inicia a animação de carregamento
  handleLoadingAnimation();
});

// Função fictícia para iniciar a digitação após o carregamento
function typeText() {
  // Implementação da função de digitação, se necessário
}
