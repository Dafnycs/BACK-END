// =========================
//  NOSSA API DE CACHORROS
// =========================
// 
//  Agora as fotos NÃO são baixadas automaticamente.
//  elas DEVEM existir manualmente na pasta
//  datas/fotos
// ==================================================

// ROTAS:
// GET /api/cachorros/aleatorios
// GET /api/cachorros/:raca

// Importar o framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex:frontend)
const cors = require("cors");
// Importa o módulo de arquivos do NODE
const  fs = require("fs");
// Importar utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importar o arquivo JSON que contém as raças e fotos 
const cachorros = require("./data/dogs.json")
// Criar a aplicação Express 
const app = express();
// definir a porta onde o servidor vai funcionar
const PORT = 3000;
//  Habilitar o use do CROS na aplicação
app.listen(cors());

// ====================================================
//            SERVIR ARQUIVOS ESTÁTICOS
// ====================================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessador pela URL /fotos"
// Exemplo:
// htpps://localhost:3000/fotos/husky/1.pg

app.use (
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") //Camiinho real da pasta do serevidor
    )
)


// =================================
//        FUNÇÃO AUXILIAR
// =================================

// Fução que recebe um array e retorna um intem aleatorio dele
function sortear(array) {
    // gera um numero aleatorio entre 0 e o tamnho do array
    // array.length - conta quantos intens existem na lsita
    // math.radom() - Sorteia um número decimal entre 0 e 1
    // math.radom() - array.length -  Multiplica o número sorteado pela quantidade de intens
    // math.floor() - tira a parte decimal, arredondando para baixo.
     const i = Math.floor(Math.random() * array.length)
    // cont i = guarda a posição na variavel i
    // Retorna o intem sorteado
    return array[i];
}