// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// Copiar
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

 // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida,animal,bebida] = [bebida,comida,animal];
console.log(comida, animal, bebida);