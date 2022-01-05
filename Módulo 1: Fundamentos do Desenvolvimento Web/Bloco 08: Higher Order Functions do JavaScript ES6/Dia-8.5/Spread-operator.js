// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Banana', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condesado', 'Leite em pó', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));