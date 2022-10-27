
//🚀 Transforme a função numeroAleatorio em uma arrow function;
// function numeroAleatorio() {
//   return Math.random()
// }


const numeroAleatorio = () => Math.random();


console.log(numeroAleatorio());


//🚀 Transforme a função hello em uma arrow function;
// function hello(nome) {
//   return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

const hello = (nome) => `Olá, ${nome} !`;

let nome = 'Ivan';
console.log(hello(nome));


//🚀 Transforme a função nomeCompleto em uma arrow function;
// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

let sobrenome = 'Pires';

console.log(nomeCompleto(nome, sobrenome));

