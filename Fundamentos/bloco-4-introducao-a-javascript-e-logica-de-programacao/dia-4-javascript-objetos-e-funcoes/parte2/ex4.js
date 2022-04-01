// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

'use strict';

function maiorPalavra(palavra){
   let atual = palavra[0];
   
   for (let index in palavra){
   
    if (atual.length < palavra[index].length){
   atual = palavra[index];
}
}
return atual;
}

console.log (maiorPalavra (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])) 