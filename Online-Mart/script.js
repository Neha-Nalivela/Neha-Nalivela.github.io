let list = ["Apple", "Mango", "Orange", "Banana"];
function search(list) {
  let input = document.getElementById("searchid").value;
  let result = list.filter(
    (value) => value.toLowerCase() === input.toLowerCase()
  );

  if (result.length > 0) {
    document.getElementById("res").innerText = result[0];
  } else {
    document.getElementById("res").innerText = "Search not found";
  }
}
