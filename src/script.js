//Abrir menu
const listaMenu = document.getElementById("lista-menu");

document.getElementById("abrir-menu").addEventListener('click', () => {
    if (listaMenu.style.display === "none") {
        listaMenu.style.display = "block";
        } else{
            listaMenu.style.display = "none";
        }
})

//Aumentar fonte e diminuir fonte
document.getElementById("aumentar-fonte").addEventListener('click' , () =>{
    document.body.style.fontSize = "1.5rem";
})

document.getElementById("diminuir-fonte").addEventListener('click' , () =>{
    document.body.style.fontSize = "1rem";
})

//Adiicionar no carrinho
let quantidadeNoCarrinho = 0;

function adicionarAoCarrinho() {
    quantidadeNoCarrinho++;
    document.getElementById('quantidade').innerText = quantidadeNoCarrinho;
}

// Selecionar todos os botões com a classe 'adicionar-carrinho' e adicionar eventos de clique
document.querySelectorAll('button[title="Adicionar no carrinho"]').forEach(button => {
    button.addEventListener('click', adicionarAoCarrinho);
});





