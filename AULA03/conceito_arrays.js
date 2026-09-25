//Exercício 1 — Criando array simples
//Crie um array chamado cores com três cores e mostre a segunda cor no console.
let cor = ["Verde", "Amarelo", "Azul"];
console.log(cor[1]);





//Exercício 2 — Primeiro e último número
//Crie um array numeros com cinco números e mostre o primeiro e o último.
let numeros = ["23", "24", "25" , "26" , "27"];
console.log(numeros[0]);
console.log(numeros[4])


//Exercício 3 — Adicionando item ao array
//Crie um array frutas com duas frutas. Depois adicione uma terceira usando push() e mostre o array.
let frutas = ["Morango" , "Pera"]
frutas.push("Melancia");
console.log(frutas)


//Exercício 4 — Removendo o último item
//Crie um array nomes com quatro nomes e remova o último usando pop().
let nomes = ["Giovanna", "Julia", "lorena" , "Dafny"];
nomes.pop();
console.log(nomes);



//Exercício 5 — Contando elementos
//Crie um array times com quatro times e mostre quantos elementos existem nele.
let times =["palemiras" , "Atletico Mineiro" , "Grêmio" , "Vasco"] 
console.log(times.length);