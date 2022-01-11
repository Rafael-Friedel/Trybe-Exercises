let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeNumerosImpares = 0;
for (var i=0;i < numbers.length; i+=1){
    if (numbers [i] % 2 === 1 ) 
    quantidadeNumerosImpares +=1; 
}
if (quantidadeNumerosImpares === 0)
    console.log ("nenhum valor ímpar encontrado") 
    else console.log (quantidadeNumerosImpares)