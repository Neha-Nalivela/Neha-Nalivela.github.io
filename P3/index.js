const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

function check() {
  const inputCart = document.getElementById("n1").value;
  const inputPin = document.getElementById("p1").value;

  const customer = customers.find(
    (c) => c.cart === inputCart && c.pin === inputPin
  );
  if (customer) {
    document.getElementById("message").textContent = "Welcome " + customer.name;
  } else {
    alert("Invalid credentials!");
  }
}
