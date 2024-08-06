document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const menuLinks = document.querySelectorAll('.mobile-nav a');
  const body = document.querySelector('body');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const contactForm = document.getElementById('contact-form');
  const socialLinks = document.querySelectorAll('.social-links a');
  const textElement = document.getElementById('typing-text');
  const containerPrimary = document.querySelector('.container-primary');
  const containerContent = document.querySelector('.container-content');
  const sectionInicial = document.querySelector('.section-inicial');

  // Função para mostrar o indicador de carregamento
  const showLoadingScreen = () => {
    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loading-text');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      loadingText.textContent = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        loading.style.display = 'none'; // Oculta o indicador de carregamento
        body.style.overflow = 'auto'; // Reabilita o scroll do body
      }
    }, 30); // Atualiza a cada 30ms
  };

  // Mostrar indicador de carregamento quando a página é carregada
  showLoadingScreen();

  // Menu hamburguer e navegação mobile
  hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });

  // Scroll para o topo
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Abrir links de redes sociais em novas abas
  socialLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.open(link.href, '_blank');
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
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Mensagem enviada com sucesso:', data);
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem:', error);
        alert(
          'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
        );
      });
  });

  // Animações ao rolar a página
  const skillBoxes = document.querySelectorAll('.skill-box');
  const serviceItems = document.querySelectorAll('.service-item');

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight / 1.5 &&
      rect.bottom > window.innerHeight / 3
    );
  };

  const checkSkills = () => {
    skillBoxes.forEach((box) => {
      if (isInViewport(box)) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  };

  const observeServiceItems = () => {
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
  };

  // Verifica a visibilidade dos elementos e inicializa as animações
  checkSkills();
  observeServiceItems();

  // Inicializa AOS (Animate On Scroll)
  AOS.init({ duration: 1200 });

  // Animação inicial do layout
  setTimeout(() => {
    containerContent.style.transform = 'translateY(0)';
    containerContent.style.opacity = '1';
    containerPrimary.classList.add('pushed');
    sectionInicial.style.transform = 'translateY(0)';
  }, 100); // Atraso de 100ms para garantir a renderização do layout
});

// Função debounce para limitar a frequência de execução
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const handleScroll = () => {
  console.log('Scroll event');
};

window.addEventListener('scroll', debounce(handleScroll, 200));

// Função throttle para limitar a frequência de execução
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const handleResize = () => {
  console.log('Resize event');
};

window.addEventListener('resize', throttle(handleResize, 200));

// Carregar dados da API
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const userContainer = document.getElementById('user-container');

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      userContainer.innerHTML = data
        .map(
          (user) => `
        <div class="user-card">
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        </div>
      `,
        )
        .join('');
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      userContainer.innerHTML = '<p>Failed to load user data.</p>';
    });
});
