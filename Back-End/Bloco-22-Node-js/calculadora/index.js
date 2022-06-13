const operations = require('./operations')
console.log('Minha calculadora simples')

const readline = require('readline-sync');

const numero1 =  readline.questionInt('Digite um número:          ')
const oper = readline.question('Digite a operação: +, -, *, / :      ')
const numero2 = readline.questionInt('Digite outro número:      ')

switch(oper) {
    case "+":
        operations.sum(numero1,numero2)
        break;
    case "-":
        operations.sub(numero1,numero2)
        break;
    case "*":
        operations.mul(numero1,numero2)
        break;
    case "/":
        operations.div(numero1,numero2)
        break;
    default:
        console.log('Opa a operação é desconhecida ou ainda não foi implementada.') 
}