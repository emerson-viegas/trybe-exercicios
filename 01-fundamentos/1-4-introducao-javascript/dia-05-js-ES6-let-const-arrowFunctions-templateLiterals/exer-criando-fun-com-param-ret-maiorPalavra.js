
//🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.



//longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'



const maiorPalavra = (text) => {

  const buscadorPalavra = text.split(' ');
  let palavraMaior = 0;
  let palavraBuscada = '';

  for(const resultado of buscadorPalavra){
    if(resultado.length > palavraMaior){
      palavraMaior = resultado.length;
      palavraBuscada = resultado;
    }

  }
    
  
  return palavraBuscada;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));