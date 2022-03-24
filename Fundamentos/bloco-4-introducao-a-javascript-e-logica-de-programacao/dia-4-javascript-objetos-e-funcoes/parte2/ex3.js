// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

'use strict';

let arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];

function indiceDeMenorValor (array){
    let atual = 0
    for (let index in array)
    if (array[atual] > array [index]){
    atual = index}
    return atual
}

console.log (indiceDeMenorValor(arrayDeTeste))