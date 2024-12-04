const abrirMenu = document.getElementById("abrir-menu");
const listaMenu = document.getElementById("lista-menu");

abrirMenu.addEventListener('click', () => {
    if (listaMenu.style.display === "none") {
        listaMenu.style.display = "block";
        } else{
            listaMenu.style.display = "none";
        }
})

const tamanhoFonte = document.querySelector("html");
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");

aumentarFonte.addEventListener('click' , () =>{
    if(tamanhoFonte){
        tamanhoFonte.style.fontSize = "1.3rem";
    }
})

diminuirFonte.addEventListener('click' , () =>{
    if(tamanhoFonte){
        tamanhoFonte.style.fontSize = "1rem";
    }
})

