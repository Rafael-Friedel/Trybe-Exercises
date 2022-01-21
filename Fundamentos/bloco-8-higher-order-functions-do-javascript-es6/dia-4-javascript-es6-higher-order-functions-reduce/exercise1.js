// 1 - Dada uma matriz, transforme em um array.
// Copiar

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => arr.reduce((acum, itemAtual) => acum.concat(itemAtual));
 console.log(flatten(arrays));