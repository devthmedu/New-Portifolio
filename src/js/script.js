document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const menuLinks = document.querySelectorAll('.mobile-nav a');
  const body = document.querySelector('body');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const dynamicText = document.getElementById('dynamic-text');
  const loadingText = document.getElementById('loading-text');
  const loading = document.getElementById('loading');
  const contactForm = document.getElementById('contact-form');
  const socialLinks = document.querySelectorAll('.social-links a');
  const textElement = document.getElementById('typing-text');

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

  // Animação de digitação para o elemento com id 'typing-text'
  const typeText = () => {
    const text = 'Desenvolvedor Frontend';
    let index = 0;

    const type = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Ajuste o tempo para alterar a velocidade da digitação
      }
    };

    type(); // Inicia a animação de digitação
  };

  // Animação de texto dinâmico
  const animateDynamicText = () => {
    const texts = ['Frontend', 'Backend', 'UX'];
    let index = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < texts[index].length) {
        dynamicText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150); // Velocidade de digitação (ms)
      } else {
        setTimeout(deleteText, 1500); // Pausa após a digitação (ms)
      }
    };

    const deleteText = () => {
      if (charIndex > 0) {
        dynamicText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100); // Velocidade de exclusão (ms)
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 150); // Inicia a digitação do próximo texto
      }
    };

    type(); // Inicia a animação de digitação
  };

  // Função para carregar a imagem do usuário
  const loadUserImage = () => {
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
  };

  // Animação de carregamento inicial
  const handleLoadingAnimation = () => {
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

  // Abrir links das redes sociais em novas abas
  const handleSocialLinks = () => {
    socialLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(this.href, '_blank');
      });
    });
  };

  // Manipulação do formulário de contato
  const handleContactForm = () => {
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
  };

  // Inicia todas as funcionalidades
  handleLoadingAnimation();
  loadUserImage();
  animateDynamicText();
  handleSocialLinks();
  handleContactForm();
});


document.addEventListener('DOMContentLoaded', function () {
  const skillBoxes = document.querySelectorAll('.skill-box');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    return (
      elementTop < windowHeight / 1.5 && // Ajustado para uma área maior
      elementBottom > windowHeight / 3 // Ajustado para uma área maior
    );
  }

  function checkSkills() {
    skillBoxes.forEach((box) => {
      if (isInViewport(box)) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  }

  // Verifica a visibilidade inicialmente
  checkSkills();

  // Adiciona um ouvinte de evento para verificar a visibilidade ao rolar
  window.addEventListener('scroll', checkSkills);

  // Adiciona um ouvinte de evento para verificar a visibilidade ao redimensionar
  window.addEventListener('resize', checkSkills);
});


document.addEventListener('DOMContentLoaded', function () {
  // Inicializa AOS (Animate On Scroll) para animações de rolagem
  AOS.init({
    duration: 600, // Duração da animação em milissegundos
    easing: 'ease-out-quint', // Efeito de aceleração
  });
});

 // Inicialize o AOS
  AOS.init({
    duration: 1000, // duração das animações em milissegundos
    easing: 'ease-in-out', // tipo de easing para as animações
    once: true, // se a animação deve ocorrer apenas uma vez
  });

  document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.portfolio-item-arrow');
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', function () {
        const parent = this.closest('.portfolio-item');
        const info = parent.querySelector('.portfolio-item-info');
        const isVisible = info.style.display === 'block';
        info.style.display = isVisible ? 'none' : 'block';
        this.querySelector('i').classList.toggle('fa-chevron-down');
        this.querySelector('i').classList.toggle('fa-chevron-up');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Adiciona animações aos itens de serviço quando eles entram na tela
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 },
    );

    serviceItems.forEach((item) => observer.observe(item));
  });
document.addEventListener('DOMContentLoaded', function () {
  // Adiciona o listener para o evento de envio do formulário
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // Previne o comportamento padrão de envio do formulário

      // Simula o envio bem-sucedido do formulário com um atraso
      setTimeout(function () {
        // Exibe as informações de contato após o envio
        document.getElementById('contact-info').style.display = 'block';

        // Atualiza os links de contato
        document.getElementById('email-link').href =
          'mailto:developer.thomas@outlook.com';
        document.getElementById('email-link').textContent =
          'developer.thomas@outlook.com';

        document.getElementById('phone-link').href = 'tel:+5519999042072';
        document.getElementById('phone-link').textContent = '+55 19 99999-9999';

        document.getElementById('whatsapp-link').href =
          'https://wa.me/5519999042072';

        // Opcional: Limpa o formulário após o envio
        document.getElementById('contact-form').reset();

        // Opcional: Exibe uma mensagem de confirmação
        alert('Obrigado pelo seu contato! Em breve, retornarei.');
      }, 1000); // Simula um atraso de 1 segundo para o envio do formulário
    });
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
    });
});
