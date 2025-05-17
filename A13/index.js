const products=[
    { id: 1, name: "product1", price: 34},
    { id : 2, name: "product2", price: 56},
    { id : 3, name: "product3",  price: 43},

];

const cart={1:7,3:5}//id:qty
products.map(value=>{
    const qty = cart[value.id]||0;
    console.log(value.id, value.name, value.price, value.price*qty)
})

//const ins = products.filter(product=>product.qty>2).map((product)=>({
//    ...product,
//    price:product.price+5, 
//    status: "completed", 
//    total:product.price*product.qty})
//);
//console.log(ins)
//products.foreach((product) => console.log(product.name))
