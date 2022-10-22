const custoProduto = 3;
const valorDeVenda = 5;
const imposto = 0.4;

if(custoProduto >= 0 && valorDeVenda >= 0){
  
  const valorCustoTotal = custoProduto + imposto;
  const lucro = (valorDeVenda - valorCustoTotal)* 1000;

  console.log(lucro);

}else {
  console.log('Corrija seus valores, resultado negativo');
}
