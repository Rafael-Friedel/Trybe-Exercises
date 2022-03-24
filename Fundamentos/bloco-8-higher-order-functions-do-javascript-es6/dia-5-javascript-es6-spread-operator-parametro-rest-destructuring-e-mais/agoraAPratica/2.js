// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...number) => number.reduce((obj1, obj2) => obj1+obj2 , 0 ) 

console.log(sum(2,2,3,3,4,4,2,3,2));