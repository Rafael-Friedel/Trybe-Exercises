// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
// Copiar
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };
"use strict";
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
    };

for (let index in car){
    console.log(index, car[index])
}