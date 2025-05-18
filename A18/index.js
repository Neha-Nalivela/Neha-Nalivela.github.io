const products = [
    { id: 1, name: "product1", price: 34 },
    { id: 2, name: "product2", price: 56 },
    { id: 3, name: "product3", price: 43 },
];

const cart = { 1: 7, 3: 5 };
const total = products.reduce((sum,value)=>{
    const qty= cart[value.id]||0;
    return sum + value.price * qty;
},0)
console.log(total);