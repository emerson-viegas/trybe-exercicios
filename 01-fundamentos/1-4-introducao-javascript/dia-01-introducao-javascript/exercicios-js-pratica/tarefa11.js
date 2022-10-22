let impostoINSS;
let impostoIR;

let salarioBruto = 3000.00;

if(salarioBruto <= 1556.94){

  impostoINSS = salarioBruto * 0.08;

}else if (salarioBruto <= 2594.92){

  impostoINSS = salarioBruto * 0.09;

}else if (salarioBruto <= 5189.82){

  impostoINSS = salarioBruto * 0.11;

}else {
  impostoINSS = 570.88
}

const salarioLiquido = salarioBruto - impostoINSS;

if(salarioLiquido <= 1903.98){

  impostoIR = 0;

}else if (salarioLiquido <= 2826.65) {

  impostoIR = (salarioLiquido * 0.075) - 142.80;

}else if (salarioLiquido <= 3751.05) {

  impostoIR = (salarioLiquido * 0.15) - 354.80;

}else if (salarioLiquido <= 4664.68) {

  impostoIR = (salarioLiquido * 0.225) - 636.13;

}else {
  impostoIR = (salarioLiquido * 0.275) - 869.36;

};

console.log('Total a receber: ' + (salarioLiquido - impostoIR));