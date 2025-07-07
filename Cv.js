const links = document.querySelectorAll('.link');
const secoes = document.querySelectorAll('.secao');

// Oculta todas as seções ao carregar
secoes.forEach(secao => {
  secao.style.display = 'none';
});

// Mostrar seção ao clicar no link
links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const alvo = this.getAttribute('data-alvo');

    // Oculta todas as seções
    secoes.forEach(secao => {
      secao.style.display = 'none';
    });

    // Mostra a seção desejada
    const secaoAlvo = document.querySelector(`[data-secao="${alvo}"]`);
    if (secaoAlvo) {
      secaoAlvo.style.display = 'block';
    }

    // Impede que o clique no link propague pro body
    event.stopPropagation();
  });
});

// Quando clicar fora (em qualquer lugar do body), oculta as seções
document.body.addEventListener('click', function () {
  secoes.forEach(secao => {
    secao.style.display = 'none';
  });
});

// Impede que o clique dentro da seção feche ela
secoes.forEach(secao => {
  secao.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

