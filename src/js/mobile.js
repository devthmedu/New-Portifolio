document.addEventListener('DOMContentLoaded', () => {
  // Seletores
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const menuLinks = document.querySelectorAll('.mobile-nav a');
  const body = document.querySelector('body');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

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
  menuLinks.forEach((link) => link.addEventListener('click', closeMobileNav));

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Função para mostrar ou ocultar o botão baseado na rolagem
  const toggleScrollToTopBtn = () => {
    scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
  };

  // Adiciona o evento de rolagem para mostrar/ocultar o botão
  window.addEventListener('scroll', toggleScrollToTopBtn);
});
