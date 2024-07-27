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
  socialLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.open(this.href, '_blank');
    });
  });

  // Manipulação do formulário de contato
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

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
