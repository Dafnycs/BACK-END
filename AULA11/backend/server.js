//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//  server,js - BACK-END COMPLETO
//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨


// PARTE 1: Importar as ferramentas
const express = require('express');                 //Biblioteca para criar um servidor
const path = require('path');                       //Ajuda a montar caminhos de pastas
const { DatabaseSync} = require ('node:sqlite')     //Banco SQLite (já vem dentro do node!) 

//PARTE 2: Criar o servidor e abrir o banco
const app = express(); //Cria o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db')); //Abre o banco (se não existir, cria o arquivo). ------> __dirname =  pasta deste arquivo


//Criar a tabela "tarefa" se ela ainda não existir
banco.exec(`
    CREATE TABLE IF NOT EXISTE tarefas(
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo          TEXT NOT NULL, 
    concluida       INTEGER DEFAULT 0     
    ) 
`);

//parte 3: Configurar o servidor (os famosos middlewares)
// app.use, "TODO pedido que chegar, passe primeiro por aqui"

app.use(express.json());  //Faz o servidor entender o JSON
app.use(express.static(path.join(__dirname, '..', 'public')));   // Entrega a página da pasta "public"

//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

// PARRTE 4: ROTAS (API)
//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
// Rota: A combinação do método + endereço 
// API: É o conjunto dessas rotas
//
// Toda rota recebe duas coisas (SEMPRE NA ORDEM ABAIXO):
// resposta = o que vamos devolver para o front.
//
// Operação | Método HTPP | Endereço | Comando SQL
//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
//        Create     | POST      | /tarefas       | INSERT
//        Read       | GET       | /tarefas       | SELECT
//        Update     | PUT       | /tarefas/:id   | INSERT
//        Delete     | DELETE    | /tarefas/:id   | DELETE