document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const menuLinks = document.querySelectorAll('.mobile-nav a');
  const body = document.querySelector('body');

  // Função para alternar o menu móvel
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
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      closeMobileNav();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  // Função para mostrar ou ocultar o botão baseado na rolagem
  const toggleScrollToTopBtn = () => {
    if (window.scrollY > 300) {
      // Mostra o botão após rolar 300px
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  // Adiciona o ouvinte de evento para rolar a página
  window.addEventListener('scroll', toggleScrollToTopBtn);

  // Adiciona o ouvinte de evento para o clique no botão
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave para o topo
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const dynamicText = document.getElementById('dynamic-text');
  const texts = ['Frontend', 'Backend', 'Ux'];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150; // Velocidade de digitação (ms)
  const deletingSpeed = 100; // Velocidade de exclusão (ms)
  const pauseDuration = 1500; // Duração da pausa após a digitação (ms)

  function type() {
    if (charIndex < texts[index].length) {
      dynamicText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(deleteText, pauseDuration);
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      dynamicText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, deletingSpeed);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }

  type(); // Inicia a animação de digitação
});

particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
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
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
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
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

document.addEventListener('DOMContentLoaded', function () {
  // Carregamento dinâmico da imagem do usuário
  fetch('https://api.example.com/user/image')
    .then((response) => response.json())
    .then((data) => {
      const imgUser = document.querySelector('.img-user img');
      imgUser.src = data.imageUrl;
      imgUser.alt = data.userName;
    })
    .catch((error) => {
      console.error('Erro ao obter imagem do usuário:', error);
    });

  // Animação de carregamento inicial com ícone
  const loadingText = document.getElementById('loading-text');
  const loading = document.getElementById('loading');

  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    } else {
      progress++;
      loadingText.innerText = `${progress}%`;
    }
  }, 10);

  // Abrir links das redes sociais em novas abas
  const socialLinks = document.querySelectorAll('.box-social');

  socialLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const url = this.href;
      window.open(url, '_blank');
    });
  });

  // Manipulação do formulário de contato
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Validar se todos os campos estão preenchidos
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Enviar dados do formulário
    fetch('https://formspree.io/f/xblrdolo', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Mensagem enviada com sucesso:', data);
        alert('Mensagem enviada com sucesso!');
        contactForm.reset(); // Limpar o formulário após o envio
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem:', error);
        alert(
          'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
        );
      });
  });
});