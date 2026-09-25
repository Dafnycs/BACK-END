// Array
// Um array é uma lista que pode armazenar vários valores.

let frutas = ["Maçã" , "Banana" , "Uva"];
// let frutas = ["0" , "1" , "2"]
console.log(frutas[1])

//Podemos adicionar intens", sem alterar o array diretamente
frutas.push("Laranja"); //Adicionar ao final
console.log(frutas[3]);
frutas.pop(); //Remove do final (no nosso caso a laranja [3])
console.log(frutas);

// - Crie um array chamado `animais` e adicione três animais.
// - Exibe o primeiro e último no console.

let animais = ["Cachorro", "Gato", "Tartaruga"]
console.log(animais[0]);
console.log(animais[2])