const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(element) {
  // Adicione seu código aqui
  if (element.id === '31031685') {
    return element;
  }
}

const resultado = musicas.find(findMusic);

console.log(resultado);