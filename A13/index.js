const products=[
    { id: 1, name: "product1", price: 34, status:"pending"},
    { id : 2, name: "product2", price: 56, status:"pending"},
    { id : 3, name: "product2", price: 43, status:"pending"},

];
//products.foreach((product) => console.log(product.name))


const ins = products.map((product)=>({...product,price:product.price+5, status: "completed"}));
console.log(ins)
