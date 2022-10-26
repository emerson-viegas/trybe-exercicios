let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let mensagem in names){
  console.log('Olá ' + names[mensagem] + ' !');
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let valores in car){
  console.log(car[valores]);
}