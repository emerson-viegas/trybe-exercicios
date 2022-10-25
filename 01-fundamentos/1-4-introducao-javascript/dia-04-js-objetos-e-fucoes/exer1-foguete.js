let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Boas vindas querida  ' + info.personagem + ' !' );

info['recorrente'] = 'Sim'; 

console.log(info.recorrente);

for(let chaves in info){
  console.log(chaves);
}