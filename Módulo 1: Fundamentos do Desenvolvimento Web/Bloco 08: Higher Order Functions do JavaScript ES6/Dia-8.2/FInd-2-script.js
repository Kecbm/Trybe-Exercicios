const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (element) => {
  // Adicione seu código aqui:
  if (element.length === 5) {
    return element;
  }
}

const resultado = names.find(findNameWithFiveLetters);

console.log(resultado);