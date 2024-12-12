function criarCarrossel(carrosselSelector) {
    const produtos = document.querySelector(`${carrosselSelector} .produtos`);
    const produto = document.querySelectorAll(`${carrosselSelector} .produto`);
    const prev = document.querySelector(`${carrosselSelector} .prev`);
    const next = document.querySelector(`${carrosselSelector} .next`);
    let indiceAtual = 0;

    function atualizarCarrossel() {
        const produtoLargura = produto[0].offsetWidth;
        const desvio = -indiceAtual * produtoLargura;
        produtos.style.transform = `translateX(${desvio}px)`;
    }

    prev.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + produto.length) % produto.length;
        atualizarCarrossel();
    });

    next.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % produto.length;
        atualizarCarrossel();
    });

    // Ajuste inicial
    atualizarCarrossel();
}

// Inicializando os carrosséis
criarCarrossel('.carrossel');
criarCarrossel('.carrossel2');
criarCarrossel('.carrossel3');
