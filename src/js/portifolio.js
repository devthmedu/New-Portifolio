document.addEventListener('DOMContentLoaded', () => {
  // Inicializa AOS (Animate On Scroll)
  AOS.init({
    duration: 1000, // duração da animação
    easing: 'ease-in-out',
    once: true, // animação executada apenas uma vez
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

  // Animação de carregamento inicial
  const handleLoadingAnimation = () => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const loading = document.getElementById('loading');
          loading.style.opacity = '0'; // Animação de fade out
          setTimeout(() => {
            loading.style.display = 'none'; // Oculta o elemento após a animação
            document.body.classList.remove('no-scroll'); // Remove a classe que impede o scroll
            typeText(); // Inicia a digitação após a tela de carregamento desaparecer
          }, 500); // Duração da animação de fade out
        }, 500); // Tempo adicional para garantir que o progresso seja mostrado
      } else {
        progress++;
        document.getElementById('loading-text').innerText = `${progress}%`;
      }
    }, 30); // Atualiza a barra de progresso a cada 30ms
  };

  handleLoadingAnimation();

  // Função de digitação (exemplo)
  function typeText() {
    // Lógica para animação de digitação ou qualquer outra função a ser executada após o carregamento
  }

  // Função para alternar o menu móvel
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.querySelector('body');

  const toggleMobileNav = () => {
    mobileNav.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Impede o scroll quando o menu está aberto
  };

  // Função para fechar o menu móvel
  const closeMobileNav = () => {
    mobileNav.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    body.classList.remove('no-scroll'); // Permite o scroll quando o menu está fechado
  };

  // Adiciona o evento de clique ao menu hamburguer
  hamburgerMenu.addEventListener('click', toggleMobileNav);

  // Adiciona o evento de clique para fechar o menu ao clicar em um item
  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Função para mostrar ou ocultar o botão baseado na rolagem
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const toggleScrollToTopBtn = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleScrollToTopBtn);

  // Adiciona o ouvinte de evento para o clique no botão
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave para o topo
    });
  });

  // Modal
  const modal = document.getElementById('modal');
  const openModalBtn = document.querySelector('.scroll-button');
  const closeModalBtn = document.getElementById('close-modal');

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
