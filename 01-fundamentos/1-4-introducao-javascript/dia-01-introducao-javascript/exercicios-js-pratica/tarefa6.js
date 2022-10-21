let xadrez = 'rei';


switch(xadrez.toLowerCase){

      case 'rei':

      console.log('Rei, anda uma casa para qualquer direção');

      break;

      case 'peão':

      console.log('Peão pode andar uma casa ');
      break;

      case 'cavalo':

      console.log('Cavalo pode andar dua casa para frente e uma para direita ou para esquerda');
      break;

       case 'rainha':

       console.log('Rainha para todos os lados');
       break;

       case 'bispo':

       console.log('Bispo anda em diagonais');
       break;

       case 'torre':

       console.log('Torre anda em retas');
       break;

       default:

       console.log('Peça invalida');
       break;
}


      


