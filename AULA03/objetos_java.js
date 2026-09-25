// Exercício 1 – Sistema de Login
// Crie um objeto usuario com:
//Depois, exiba a mensagem:
//O login do administrador é admin e a senha é 1234, muito fraca por sinal.

let usuario = {
    login: "Dafny_senai",
    senha: 1234,
    tipo: "Administrador"
}
console.log(usuario.login)
console.log(usuario.senha)
console.log(usuario.tipo)
console.log("o login do administrador é " + usuario.login + " e a senha é " + usuario.senha + "muito fraca por sinal" )

//Exercício 2 – Cadastro de Aluno
//Crie um objeto aluno com:
//nome
//curso
//turma
//Depois, exiba a mensagem:
//O aluno Lucas está matriculado no curso de Desenvolvimento de Sistemas, na turma 2º DS.

let cadastro = {
    nome:"Lucas",
    curso:"Desenvolvimento de sistamas",
    turma: "turma 2º DS"
}
console.log(cadastro.nome)
console.log(cadastro.curso)
console.log(cadastro.turma)
console.log("O aluno " + cadastro.nome + " está matriculado no curso de " + cadastro.curso + cadastro.turma)

//Exercício 3 – Professor
//Crie um objeto professor com:
//nome
//disciplina
//turno
//Depois, exiba a mensagem:
//O professor Carlos ministra a disciplina de JavaScript no turno da manhã.

let professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "Manha"
}
console.log(professor.nome)
console.log(professor.displina)
console.log(professor.turno)
console.log(" O professor " + professor.nome + " ministra a disciplina de " + " no turno da " + professor.turno )

//Exercício 4 – Empresa
//Crie um objeto empresa com:
//nome
//area
//cidade
//Depois, exiba a mensagem:
//A empresa Tech Solutions atua na área de Tecnologia e fica em Fortaleza.

let empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
}
console.log(empresa.nome)
console.log(empresa.area)
console.log(empresa.cidade)
console.log("A empresa " + empresa.nome + " atua na área de " + empresa.area + " e fica em " + empresa.cidade)

//Exercício 5 – Computador
//Crie um objeto computador com:
//marca
//processador
//memoria
//Depois, exiba a mensagem:
//O computador da marca Dell possui processador Intel i5 e memória de 8GB.//
let computador = {
    marca: "Dell",
    processador: "intel i5",
    memoria: "8GB"
}
console.log(computador.marca)
console.log(computador.processador)
console.log(computador.memoria)
console.log("O computador" + computador.marca + " possui processador" + computador.processador + " e mémoria de " + computador.memoria )

//Exercício 6 – Livro
//Crie um objeto livro com:
//titulo
//autor
//paginas
//Depois, exiba a mensagem:
//O livro JavaScript Básico foi escrito por Ana Silva e possui 200 páginas.

let livro = {
    titulo: "JavaScript Básico",
    autor:  "Ana silva",
    paginas: "200 páginas"
}
console.log(livro.titulo)
console.log(livro.autor)
console.log(livro.paginas)
console.log("O livro " + livro.titulo + " foi escrito por " + livro.autor + " e possui " + livro.paginas)

//Exercício 7 – Filme
//Crie um objeto filme com:
//nome
//genero
//ano
//Depois, exiba a mensagem:
//O filme Matrix é do gênero Ficção e foi lançado em 1999.
let filme = {
    nome: "Matrix",
    genero:"Ficção",
    ano: "lançado em 1999"
}
console.log(filme.nome)
console.log(filme.genero)
console.log(filme.ano)
console.log("O filme " + filme.nome + " é do gênero " + filme.genero  + " e foi  " + filme.lançando)

//Exercício 8 – Jogo
//Crie um objeto jogo com:
//nome
//plataforma
//genero
//Depois, exiba a mensagem:
//O jogo Minecraft roda na plataforma PC e pertence ao gênero Sandbox.

let jogo = {
    nome: "Minecraft",
    plataforma:"PC",
    genero:"Sandbox"
}
console.log(jogo.nome)
console.log(jogo.plataforma)
console.log(jogo.genero)
console.log("O jogo " + jogo.nome + " roda na plataforma " + jogo.plataforma + " e pertence ao gênero " + jogo.genero )


//Exercício 9 – Escola
//Crie um objeto escola com:
//nome
//cidade
//turno
//Depois, exiba a mensagem:
//A escola EEEP funciona na cidade de Fortaleza no turno da manhã.

let Escola = {
    nome: "EEEP",
    cidade:"Fortaleza",
    turno:"Manhã"
}
console.log(Escola.nome)
console.log(Escola.cidade)
console.log(Escola.turno)
console.log("A escola " + Escola.nome + " funciona na cidade de " + Escola.cidade + " no turno da " + Escola.turno)

//Exercício 10 – Cadastro de Usuário
//Crie um objeto chamado conta para representar o cadastro de um usuário.

//O objeto deve possuir as seguintes propriedades:
//usuario
//senha
//nome
//email
//nivel
//curso
//turma
//idade

//Utilize os seguintes dados:
//Usuário: eduardo
//Senha: 1234
//Nome: Eduardo Silva
//E-mail: eduardo@email.com
//Nível: administrador
//Curso: Desenvolvimento de Sistemas
//Turma: DS 2
//Idade: 18

//Depois de criar o objeto, utilize as propriedades do objeto para montar e exibir no console as seguintes informações:
//Nome do usuário
//Nome completo
//E-mail
//Curso
//Turma
//Idade
//Nível de acesso
//Senha

let Casdastro = {
    usuario: "eduardo",
    senha:   1234,
    nome:   "Eduardo Silva",
    email:  "eduardo@email.com",
    nivel:  "administrador",
    curso:  "Desenvolvimento de Sistemas",
    turma:  "DS 2",
    idade:  18,
}
console.log(Casdastro.usuario) //ok
console.log(Casdastro.senha)  //ok
console.log(Casdastro.nome)
console.log(Casdastro.email) //ok
console.log(Casdastro.nivel) //ok
console.log(Casdastro.curso) //ok
console.log(Casdastro.turma) //ok
console.log(Casdastro.idade) //ok
console.log("O usuario " + Casdastro.usuario + ", de " + Casdastro.idade + " anos, esta matriculado no curso de " + Casdastro.curso + ", turma " + Casdastro.turma + ". Seu nível de acesso é "+ Casdastro.nivel + " e seu e-mail é " + Casdastro.email + ". A senha cadastrada é "  + Casdastro.senha)