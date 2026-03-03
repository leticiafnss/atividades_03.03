import leia from 'readline-sync';

const nome = leia.question("Digite o Nome do doador: ");
const idade = leia.questionInt("Digite a idade do doador: ");
const primeiraStr = leia.question("Primeira doacao de sangue? (true/false): ");
const primeiraDoacao = primeiraStr.trim().toLowerCase() === 'true';

let apto = false;

if (idade >= 18 && idade <= 69) {
 if (idade >= 60) {
 apto = primeiraDoacao;
 } else {
 apto = true;
 }
}

if (apto) {
 console.log(`${nome} está apto para doar sangue!`);
} else {
 console.log(`${nome} não está apto para doar sangue!`);
}
