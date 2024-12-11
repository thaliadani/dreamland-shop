function criarCarrossel(carrosselSelector) {
    const produtos = document.querySelector(`${carrosselSelector} .produtos`);
    const produto = document.querySelectorAll(`${carrosselSelector} .produtos .produto`);
    const prev = document.querySelector(`${carrosselSelector} .prev`);
    const next = document.querySelector(`${carrosselSelector} .next`);
    let indiceAtual = 0;

    function atualizarCarrossel() {
        const desvio = -indiceAtual * produtos.offsetWidth;
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
}

// Inicializando os carrosséis
criarCarrossel('.carrossel');
criarCarrossel('.carrossel2');
