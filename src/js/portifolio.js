
    // Inicializa o AOS.js para animações ao rolar
    AOS.init();

    // Adiciona um evento de clique para as setas dos itens do portfólio
    document.querySelectorAll('.portfolio-item-arrow').forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            // Encontra o item de portfólio pai
            const portfolioItem = this.closest('.portfolio-item');
            
            // Encontra o contêiner de informações do item
            const info = portfolioItem.querySelector('.portfolio-item-info');
            
            // Alterna a visibilidade do contêiner de informações
            info.style.transform = (info.style.transform === 'translateY(0px)') ? 'translateY(100%)' : 'translateY(0)';
            
            // Adiciona uma classe para animar a seta
            this.classList.toggle('active');
        });
    });

