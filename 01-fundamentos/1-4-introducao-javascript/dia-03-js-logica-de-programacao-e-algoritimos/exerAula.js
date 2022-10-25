// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.


let resultado = 0;

// let array = [];

for(let index = 1; index <= 50; index += 1){

  resultado += index;
}
  console.log('A soma total de 1 a 50 é: ' + resultado);

let intervalo = 0;

for(let index = 2; index <= 150; index += 1){

  if(index % 3 == 0){
    intervalo += 1;
  }
}

console.log(intervalo);


// let pedra;
// let papel;
// let tesoura;
let player1 = 'tesoura';
let player2 = 'papel';

if(player1 === 'tesoura' && player2 === 'pedra'){
  console.log('Player 2 won');

}else if(player2 === 'tesoura' && player1 === 'pedra' ){
  console.log();
}







