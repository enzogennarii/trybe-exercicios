const custumerInfoP = document.getElementById('custumerInfo');
const orderInfoP = document.getElementById('orderInfo');

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
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let custumerInfoMessage = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, apto: ${order.address.apartment}`;
  custumerInfoP.innerText = custumerInfoMessage;
};
customerInfo(order);

const orderModifier = (order) => {
  const pizzas = Object.keys(order.order.pizza);
  let orderInfoMessage = `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total},00.`;
  orderInfoP.innerText = orderInfoMessage;
};
orderModifier(order);
