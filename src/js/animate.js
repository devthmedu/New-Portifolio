// Inicializa ParticlesJS
particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Aumentei o número de partículas para uma aparência mais densa
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: '#4336a0', // Cor das partículas
    },
    shape: {
      type: 'circle', // Forma das partículas
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5, // Usado se a forma for 'polygon'
      },
      image: {
        src: '', // Removido, deixe vazio se não for usar imagens
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5, // Opacidade das partículas
      random: false,
      anim: {
        enable: true, // Adicionado animação para opacidade
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3, // Tamanho das partículas
      random: true,
      anim: {
        enable: true, // Adicionado animação para tamanho
        speed: 3,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#4336a0', // Cor das linhas de conexão
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4, // Ajustado para uma movimentação mais suave
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab', // Modo de interação ao passar o mouse
      },
      onclick: {
        enable: true,
        mode: 'push', // Modo de interação ao clicar
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8, // Ajustado para uma opacidade mais sutil
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4, // Reduzido para não sobrecarregar
      },
      remove: {
        particles_nb: 2, // Reduzido para não sobrecarregar
      },
    },
  },
  retina_detect: true,
});

// Inicializa AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000, // duração da animação
    easing: 'ease-in-out',
    once: true, // animação executada apenas uma vez
  });
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
