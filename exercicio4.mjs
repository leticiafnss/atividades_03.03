import leia from 'readline-sync';

function normalizar(txt) {
 return txt
 .trim()
 .toLowerCase()
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g, '');
}

const p1 = normalizar(leia.question('Primeira palavra (vertebrado/invertebrado): '));
const p2 = normalizar(leia.question('Segunda palavra (ave/mamifero/inseto/anelideo): '));
const p3 = normalizar(leia.question('Terceira palavra (carnivoro/onivoro/herbivoro/hematofago): '));

let animal = 'Nao identificado';

if (p1 === 'vertebrado') {
 if (p2 === 'ave') {
 if (p3 === 'carnivoro') animal = 'Águia';
 else if (p3 === 'onivoro') animal = 'Pomba';
 } else if (p2 === 'mamifero') {
 if (p3 === 'onivoro') animal = 'Homem';
 else if (p3 === 'herbivoro') animal = 'Vaca';
 }
} else if (p1 === 'invertebrado') {
 if (p2 === 'inseto') {
 if (p3 === 'hematofago') animal = 'Pulga';
 else if (p3 === 'herbivoro') animal = 'Lagarta';
 } else if (p2 === 'anelideo') {
 if (p3 === 'hematofago') animal = 'Sanguessuga';
 else if (p3 === 'onivoro') animal = 'Minhoca';
 }
}

console.log(animal);