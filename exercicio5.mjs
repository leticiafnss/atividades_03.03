import readlineSync from 'readline-sync';

const codigo = Number(readlineSync.question('Codigo do produto (1 a 6): ').trim());
const quantidade = Number(readlineSync.question('Quantidade: ').trim());

const codigoValido = Number.isInteger(codigo) && codigo >= 1 && codigo <= 6;
const quantidadeValida = Number.isInteger(quantidade) && quantidade > 0;

if (!codigoValido || !quantidadeValida) {
 console.log('Entrada invalida.');
 process.exit(1);
}

let produto = '';
let preco = 0;

switch (codigo) {
 case 1:
 produto = 'Cachorro Quente';
 preco = 10;
 break;
 case 2:
 produto = 'X-Salada';
 preco = 15;
 break;
 case 3:
 produto = 'X-Bacon';
 preco = 18;
 break;
 case 4:
 produto = 'Bauru';
 preco = 12;
 break;
 case 5:
 produto = 'Refrigerante';
 preco = 8;
 break;
 case 6:
 produto = 'Suco de laranja';
 preco = 13;
 break;
}

const valorTotal = quantidade * preco;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);