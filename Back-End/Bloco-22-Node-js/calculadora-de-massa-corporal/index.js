const readline = require('readline-sync')

console.log('Vamos calcular seu índice de massa corporal?')

// const sub = (n1, n2) => n1 /n2; 

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

// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II
// 40,0 e acima	Obesidade graus III e IV