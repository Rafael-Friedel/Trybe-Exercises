const isEven = (number) => number % 2 === 0;



const returnSoma = (param) => {
    let soma = 0;
    for (let i of param) {
        if (isEven(i)) {
            soma += 1
        }
    }
    return soma
}

recebe um array, que 