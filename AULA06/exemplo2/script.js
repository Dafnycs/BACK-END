// --------------------------------------------
//  SELECIONANDO ELEMENTOS DO DOM
// --------------------------------------------

// selecionando por ID
// console.log(document.getElementById("titulo"));
// Para visualização na console


let titulo = document.getElementById("titulo"); 
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo"); 
let imagem = document.getElementById("imagemteste"); 

// Selecionando por class
let caixas = document.getElementsByClassName("box");
// mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ------------------------------
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// ------------------------------

function alterar(){
    titulo.innerText = "Jarvis dominou tudo!🤖"
    subtitulo.innerText = "Só que nao!"
    paragrafo.innerText = "O texto do parágrafo foi modificado com JavaScript"


// Alterando elemento da classe
caixas[0].innerText =  "Primeiro parágrafo alterado"
caixas[1].innerText =  "Segundo parágrafo alterado"

//Alterando imagem
imagem.src="./img/imagem2.jpg" 

}