import readlineSync from 'readline-sync';

const nome = readlineSync.question('Nome do colaborador: ').trim();
const codigoCargo = Number(readlineSync.question('Codigo do cargo (1 a 6): ').trim());
const salario = Number(readlineSync.question('Salario: ').trim());

const nomeValido = nome.length > 0;
const cargoValido = Number.isInteger(codigoCargo) && codigoCargo >= 1 && codigoCargo <= 6;
const salarioValido = Number.isFinite(salario) && salario >= 0;

if (!nomeValido || !cargoValido || !salarioValido) {
 console.log('Entrada invalida.');
 process.exit(1);
}

let cargo = '';
let percentual = 0;

switch (codigoCargo) {
 case 1:
 cargo = 'Gerente';
 percentual = 0.10;
 break;
 case 2:
 cargo = 'Vendedor';
 percentual = 0.07;
 break;
 case 3:
 cargo = 'Supervisor';
 percentual = 0.09;
 break;
 case 4:
 cargo = 'Motorista';
 percentual = 0.06;
 break;
 case 5:
 cargo = 'Estoquista';
 percentual = 0.05;
 break;
 case 6:
 cargo = 'Tecnico de TI';
 percentual = 0.08;
 break;
}

const novoSalario = salario + (percentual * salario);

console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: R$ ${novoSalario.toFixed(2)}`);