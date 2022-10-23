// exercicio maior elemento  array



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorElemento = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > maiorElemento){
    maiorElemento = numbers[index];
  }
}

console.log(maiorElemento);

// exercicios valores impares de um array

let numImpar = 0;

for(let index = 0; index < numbers.length; index += 1) {

  if(numbers[index] % 2 !== 0){
    numImpar += 1;
  }
}

if(numImpar === 0){
  console.log('Nenhum valor impar encontrado');
}else{
  console.log(numImpar);
}

// exercicios menor valor do array

let menorElemento = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < menorElemento){
    menorElemento = numbers[index];
  }
}

console.log(menorElemento)