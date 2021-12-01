// No exemplo acima, utilizamos o For/of para percorrer o nosso iterável e nos retornar o valor dos índices.
// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// Copiar
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// };
"use strict";
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};
for (let index in names){
    console.log("Olá " + names[index] )
}

