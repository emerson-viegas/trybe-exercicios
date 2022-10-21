const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

const triangulo = ang1 + ang2 + ang3

if(triangulo > 0 && triangulo <= 180){
  console.log(true);

}else if (triangulo > 180){
  console.log(false);

}else if (triangulo < 0){
  console.log('Triângulo inválido');

}