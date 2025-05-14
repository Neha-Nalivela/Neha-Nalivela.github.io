document.addEventListener("DOMContentLoaded", function () {
  // Populate options 10–100
  let str = "";
  for (let i = 1; i <= 100; i++) {
    str += `<option value="${i}">${i}</option>`;
  }
  document.getElementById("num1").innerHTML = str;
  document.getElementById("num2").innerHTML = str;

  // Attach msg function to window so it can be used in HTML onclick
  window.msg = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let r1 = add(num1, num2);
    let r2 = sub(num1, num2);
    let r3 = mul(num1, num2);
    let r4 = div(num1, num2);

    document.getElementById("dvAdd").innerHTML = "Addition: " + r1;
    document.getElementById("dvSub").innerHTML = "Subtraction: " + r2;
    document.getElementById("dvMul").innerHTML = "Multiplication: " + r3;
    document.getElementById("dvDiv").innerHTML = "Division: " + r4;
  };

  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";
  }
});
