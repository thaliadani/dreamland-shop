const produtosContainer = document.querySelector('.carrossel .produtos')
const produto = document.querySelectorAll('.carrossel .produtos .produto')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let indiceAtual = 0

function atualizarCarrossel() {
    const desvio = -indiceAtual * 320
    produtosContainer.style.transform = `translateX(${desvio}px)`
}

prev.addEventListener('click', () => {
    indiceAtual =(indiceAtual - 1 + produto.length) % produto.length
    atualizarCarrossel()
})

next.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % produto.length
    atualizarCarrossel()
})

