import leia from 'readline-sync';

const n = leia.questionInt("Digite um numero inteiro: ");

let parOuImpar;
if (n % 2 === 0) {
 parOuImpar = "par";
} else {
 parOuImpar = "impar";
}

let sinal;
if (n > 0) {
 sinal = "positivo";
} else if (n < 0) {
 sinal = "negativo";
} else {
 sinal = "neutro";
}

console.log(`O Número ${n} é ${parOuImpar} e ${sinal}!`);