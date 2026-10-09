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


//===================================
//          ROTAS DA API
//===================================


// ROTA 1- Cachorro aleatorio
app.get("/api/cachorros/aleatorio", (req, res) => {
// req ´request(requisição) = é o pedido que chega ao sevidor. por exemplo, o navegador pede uma de cahchorro
// res - response(resposta) = é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro



//pegar todas as fotos de todas as raças
// object.values pega os valores do objeto
// flat transforma tudo em único array
const todasAsFotos = Object.values(cachorros).flat();
})

//Sorteia uma foto aleatória 
const item = sortear(todasAsFotos)

//respode para o cliente em formato JSON
res.json({
    //status da resposta
    status: "sucess",
    //URL da imagem que foi sorteada
    messsage:`http://localhost:${PORT}/fotos/${item}`  
});

// ROTA 2 - Cachorro por raça
// Exeplo de acesso :
// http://localhost:3000/api/cachorro/husky

app.get("/api/cachorros/:raca", (req, res) => {

        //pega o paramentro da URL (ex: husky)
        const raca = req.params.raca.toLocaleLowerCase();
        //params = contém os parâmetros definidos na URL da rota
        //.raca = acessa o parâmetro chamado raca.
        //.toLowerCase() = Transforma toda as letras em minusculas
        if (!cachorros[raca]) {
         //cachorros[raca]: procurar a raca dentro do objeto *cachorro*
         //!: significa não: Nesse cas, verifica se a raça não existe ou se seu valor é falso
            //se não existir, retornar erro 404
            res.status(404).json({
                status: "error",
                message: `Raça "${raca}" não encotrada`
            });

            //encerra a execução da rota
            return;
        }

        //sorteia uma foto de raca solicitada
        const item = sortear(cachorros[raca]);

        //retorna a resposta em JSON
        res.json({
            status:"success",
            message: `https://localhost:${PORT}/fotos/${item}`

        });
})