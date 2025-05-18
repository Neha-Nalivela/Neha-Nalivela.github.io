const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

const cart = {};

const addToCart = (id) => {
  /*
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  */
 //cart[id]=1;
 cart[id] = (cart[id] || 0)+1;
 console.log(cart);
};

const dispCart = () => {
 const root = document.getElementById("root");
 /* root.innerHTML = "<h2>Cart</h2>";

  for (let id in cart) {
    const product = products.find(p => p.id == id);
    root.innerHTML += `
      <div class="product">
        <p>${product.name}</p>
        <p>₹${product.price}</p>
        <p>Quantity: ${cart[id]}</p>
      </div>
    `;
  }*/
 let str = "<h2>Cart</h2>";
  products.map((value) => {
    cart[value.id] &&
      (str += `<div class="product">
      ${value.name}-${value.price}-<button onclick="dec(${value.id})">-</button>${cart[value.id]}<button onclick="inc(${value.id})">+</button>-${value.price*cart[value.id]}
     </div>
    `);
  });
  root.innerHTML = str;
};

const inc = (qty) => {
    cart[qty]++;
    dispCart();
}
const dec = (qty) => {
    if (cart[qty] > 1) {
    cart[qty]--;
  } else {
    delete cart[qty];
  }
  dispCart();
}
const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Product List</h2>";

  products.forEach((value) => {
    root.innerHTML += `
      <div class="product">
        <p>${value.name}</p>
        <p>₹${value.price}</p>
        <button onclick="addToCart(${value.id})">Add to cart</button>
      </div>
    `;
  });
};
