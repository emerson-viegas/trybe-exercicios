let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//exercicio imprimindo valores do array 

// for(let index = 0; index < numbers.length; index += 1){
  
//   console.log(numbers[index]);

// }


//exercicio soma elementos do array

let soma = 0;

for(let index = 0; index < numbers.length; index += 1){

  soma += numbers[index];

}

console.log(soma);

//exercicios média dos valores do array

let media = 0;

for(let index = 0; index < numbers.length; index += 1){

  media = soma / numbers.length;

}

console.log(media);