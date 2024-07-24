$(document).ready(function () {
  // Função para lidar com o clique na seta de cada item do portfólio
  $('.portfolio-item-arrow').click(function (event) {
    event.preventDefault();

    var $currentItem = $(this).closest('.portfolio-item');

    // Fechar outros itens abertos
    closeOtherItems($currentItem);

    // Toggle para abrir ou fechar o item clicado
    togglePortfolioItem($currentItem);
  });

  // Função para fechar todos os outros itens do portfólio que estão abertos
  function closeOtherItems(currentItem) {
    $('.portfolio-item')
      .not(currentItem)
      .each(function () {
        var $info = $(this).find('.portfolio-item-info');
        if ($info.hasClass('open')) {
          togglePortfolioItem($(this));
        }
      });
  }

  // Função para abrir ou fechar o item do portfólio
  function togglePortfolioItem($item) {
    var $info = $item.find('.portfolio-item-info');
    var $arrow = $item.find('.portfolio-item-arrow');
    var isOpen = $info.hasClass('open');

    if (!isOpen) {
      // Abrir o item do portfólio
      openPortfolioItem($item, $info, $arrow);
    } else {
      // Fechar o item do portfólio
      closePortfolioItem($item, $info, $arrow);
    }
  }

  // Função para abrir o item do portfólio
  function openPortfolioItem($item, $info, $arrow) {
    $info.addClass('open');
    $arrow.addClass('open');
    $info.css('bottom', '0');
    $arrow.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  }

  // Função para fechar o item do portfólio
  function closePortfolioItem($item, $info, $arrow) {
    $info.removeClass('open');
    $arrow.removeClass('open');
    $info.css('bottom', '-100%');
    $arrow.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  }

  // Fechar todos os itens do portfólio ao clicar fora deles
  $(document).click(function (event) {
    if (!$(event.target).closest('.portfolio-item').length) {
      $('.portfolio-item-info.open').each(function () {
        closePortfolioItem(
          $(this).closest('.portfolio-item'),
          $(this),
          $(this).siblings('.portfolio-item-arrow'),
        );
      });
    }
  });

  // Expandir/contrair item do portfólio ao clicar no card inteiro
  $('.portfolio-item').click(function () {
    var $item = $(this);
    var $info = $item.find('.portfolio-item-info');
    var isOpen = $info.hasClass('open');

    if (!isOpen) {
      openPortfolioItem($item, $info, $item.find('.portfolio-item-arrow'));
    } else {
      closePortfolioItem($item, $info, $item.find('.portfolio-item-arrow'));
    }
  });
});
