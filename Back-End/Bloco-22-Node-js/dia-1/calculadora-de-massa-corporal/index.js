const readline = require('readline-sync')

console.log('Vamos calcular seu índice de massa corporal?')
const peso = readline.questionInt('Qual o seu peso?:    ');
const altura = readline.questionFloat('Qual a sua altura?:   ');
const result =  peso / (altura * altura)

let ranking;

if(result < 18.5) ranking = 'Abaixo do peso'
else if(result < 24.9) ranking = 'Peso normal'
else if(result < 29.9) ranking = 'Acima do peso'
else if(result < 34.9) ranking = 'Obesidade grau I'
else if(result < 39.9) ranking = 'Obesidade grau II'
else if(result > 40) ranking = 'Obesidade grau III e IV'
else ranking = 'Não classificado'

console.log(`Seu índice de massa corporal é ${result.toFixed(2)}, classificado como: ${ranking}`)
