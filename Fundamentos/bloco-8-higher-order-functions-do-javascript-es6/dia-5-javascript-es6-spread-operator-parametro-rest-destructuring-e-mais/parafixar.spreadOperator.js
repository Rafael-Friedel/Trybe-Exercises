// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['farinha láctea', 'açaí', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const açaíGostoso = [...fruit,...additional];
  return açaíGostoso
};

console.log(fruitSalad(specialFruit, additionalItens));