let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let multplicacion = 0;


for (let index = 0; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

    if(multplicacion = numbers[index] * numbers[index + 1]){

    newNumbers.push(multplicacion);
     
  }else {
    newNumbers.push(numbers[index] * 2);
  }
}
}
console.log(newNumbers);