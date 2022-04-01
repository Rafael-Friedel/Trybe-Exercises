const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const address = order.address.street
    const nome = order.order.delivery.deliveryPerson
    const nome2 = order.name
    const fone = order.phoneNumber
    const num = order.address.number
    const ap = order.address.apartment
    
    
  return `Olá ${nome}, entrega para: ${nome2}, Telefone: ${fone}, R. ${address}, Nº: ${num}, AP: ${ap}`
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const bebida = order.order.drinks.coke.type;
    const nome = order.name = 'Luiz Silva';
    const sabores = Object.keys(order.order.pizza);
    const valorBebida = order.order.drinks.coke.price;
    const valorPizzaM = order.order.pizza.marguerita.price;
    const valorPizzaP = order.order.pizza.pepperoni.price;
    const valorDoPedido = valorBebida + valorPizzaM + valorPizzaP
    
  return console.log(`Olá ${nome}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${bebida} é R$ ${valorDoPedido},00.`)
  }
  
  orderModifier(order);

//   Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00