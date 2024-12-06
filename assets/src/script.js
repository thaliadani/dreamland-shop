
const listaMenu = document.getElementById("lista-menu");

document.getElementById("abrir-menu").addEventListener('click', () => {
    if (listaMenu.style.display === "none") {
        listaMenu.style.display = "block";
        } else{
            listaMenu.style.display = "none";
        }
})

document.getElementById("aumentar-fonte").addEventListener('click' , () =>{
    document.body.style.fontSize = "1.5rem";
})

document.getElementById("diminuir-fonte").addEventListener('click' , () =>{
    document.body.style.fontSize = "1rem";
})

