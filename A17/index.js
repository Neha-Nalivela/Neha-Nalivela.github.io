//function add(...values){
//    const x=values.reduce((add,val) => add+val,0);
//    console.log(x)
//}
const products = [
    { id: 1, name: "product1", price: 34 },
    { id: 2, name: "product2", price: 56 },
    { id: 3, name: "product3", price: 43 },
];

const cart = { 1: 7, 3: 5 };

const Total = [];

products.map(value => {
    const qty = cart[value.id] || 0;
    const totalPrice = value.price * qty;
    console.log(value.id, value.name, value.price, totalPrice);
    
    Total.push(totalPrice); 
});

function add(...values) {
    const total = values.reduce((acc, val) => acc + val, 0);
    console.log("Cart total:", total);
}

add(...Total);
