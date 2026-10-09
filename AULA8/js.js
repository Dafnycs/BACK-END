//=======================================
// API DE CACHORROS
//=======================================

// Endereço da API que vamos utilizar
const url = 'https://dog.ceo/api/breeds/image/random';

// Pegandop os elementos do HTML

// - Imagem pelo seu id
const fotoCachorro = document.getElementById('fotoCachorro');

// - Botão pelo seu id
const btnNovaFoto = document.getElementById('btnNovaFoto');

// ==================================
// FUNÇÃO PARA BUSCAR UMA NOVA FOTO
// ==================================

async function buscarFoto() {
    // Fazerr uma requisição para a API
    const resposta = await fetch(url);
    // Converter a resposta da API para 
    const dados = await resposta.json();
    // Mostrar no console o que a API retornou
    console.log(dados);
    // Alteramos o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

//=========================================
// BOTÃO
//=========================================
// Quando o usuário clicar no botão
// Vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// Quando a página abrir,
// Já buscamos uma foto automaticamente.
buscarFoto();