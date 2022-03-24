// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'C', 'A', 'N.A', 'A', 'D', 'C'];

const checarespostas = (resposta, gabarito) =>{
    if (resposta === gabarito){
      return 1 
    }if (resposta === 'N.A'){
        return 0;
    }return -0.5
};
   
const myHOF = (gabarito, arrayderesposta, func) => {
let totalDePontos = 0;
for(let index in gabarito){
    let soma = func(arrayderesposta[index], gabarito[index])
    totalDePontos += soma
}
return (totalDePontos >= 7) ? `O aluno somou ${totalDePontos} pontos! Parabéns você foi aprovado!!` : `O aluno somou ${totalDePontos} pontos! Ainda não, dessa vez você foi reprovado!!`

};

console.log(myHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, checarespostas));

 