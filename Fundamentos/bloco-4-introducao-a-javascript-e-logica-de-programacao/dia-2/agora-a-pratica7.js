let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0]
for (var i=1;i < numbers.length; i+=1){
let atual = numbers[i];
if (atual < menor)
menor = atual;
}
console.log (menor)