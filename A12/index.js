const products=[
    { id: 1, name: "product1", price: 34},
    { id : 2, name: "product2", price: 56},
    { id : 3, name: "product2", price: 43}

];
products.foreach((product) => console.log(product.name))


const ins = products.map(price=>[price.price+5])
console.log(ins)
