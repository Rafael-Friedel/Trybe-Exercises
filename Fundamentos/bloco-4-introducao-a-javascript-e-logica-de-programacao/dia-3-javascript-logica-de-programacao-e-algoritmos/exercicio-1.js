// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:n = 5

// *****
// *****
// *****
// *****
// *****
"use strict"
var n = 5
var asteriscos = '*';
var input = '';
for (var i=0;i < n; i+=1 ){
       input += asteriscos; }

for (var i= 0;i<n;i+=1){
    console.log(input)
}
