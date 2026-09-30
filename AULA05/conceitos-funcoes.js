// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável. criado para executar uma tarefa especifica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// Ela processa
// Devolve um resultado (return)

// ------------------------------
// Estrutura básica de uma função
// ------------------------------

// function nomeDaFuncao(parametro1, parametro2){
    //código que será executado
 //return resultado;   
// }

// fuction ---> palavra-chave
// nomeDaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS

// 1 - Somar dois números
function somar (a, b) {
    return a + b;
}
console.log(somar(2,13))

//2 - Converter real para dólar
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}
console.log(realParaDolar(10, 5.20).toFixed(2)) //.toFixed(2) Serve para contar 2 casas depois da virgula, se for 3 vai ser 3 assim em diante.

// 2 - Converter dórla para real
function dolarParaReal(valorDolar, cotacao){
    return valorDolar/ cotacao;
}
console.log(dolarParaReal(10, 0.19).toFixed(2));

// 2 - Outro jeito de fazer
//function dolarParaReal(valorDolarr, cotacao){
//    return valorDolarr * cotacao;
// }
//console.log(dolarParaReal(10, 5.20).toFixed(2));

// 4 - Aumento de salário (você merece 25% de aumento)
function aumentoSalario(salario){
    return salario + (salario * 0.25);
}
console.log(aumentoSalario(1500));


// 5 - Verifique se é par ou impar?
function parOuImpar (valor){
    if (valor % 2 === 0){
     console.log ("Seu numero é par")
     }
    else{
        console.log("Seu numero é impar")
    } 
}
    console.log(parOuImpar(3))

    
function parOuImpar(numero){
    return numero %2 === 0 ? "par" :"impar";
    // Se o resto for 0 --> retorna "par"
    // Caso contrário ---> retorna "impar"
}
  console.log(parOuImpar(6));      