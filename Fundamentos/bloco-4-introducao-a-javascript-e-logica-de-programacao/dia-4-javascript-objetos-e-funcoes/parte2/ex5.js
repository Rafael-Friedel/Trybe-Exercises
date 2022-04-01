// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

'use strict';

function maisRepete (numeros){
    let repeat = 0
    let numRepeat = 0
    let indexNumRepeat = 0
    for ( let index in numeros){
        let verificaNumero = numeros[index]
        for (let index2 in numeros){
            if (verificaNumero === numeros[index2]){
            numRepeat += 1
            }
        }
        if (numRepeat > repeat){
            repeat = numRepeat 
            indexNumRepeat = index
            }
            numRepeat = 0
    }
    return numeros[indexNumRepeat]
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))