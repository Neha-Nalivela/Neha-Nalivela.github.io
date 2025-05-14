let str1 = "";
for (let i = 1; i <= 31; i++) {
  str1 += `<option value="${i}">${i}</option>`;
}
document.getElementById("date").innerHTML = str1;

let str2 = "";
for (let i = 1; i <= 12; i++) {
  str2 += `<option value="${i}">${i}</option>`;
}
document.getElementById("mon").innerHTML = str2;

let str3 = "";
for (let i = 1980; i <= 2025; i++) {
  str3 += `<option value="${i}">${i}</option>`;
}
document.getElementById("year").innerHTML = str3;

document.addEventListener("DOMContentLoaded", function () {
  const customRadio = document.getElementById("custom");
  const maleRadio = document.getElementById("male");
  const femaleRadio = document.getElementById("female");
  const pronounDiv = document.getElementById("pronounDiv");

  function togglePronoun() {
    if (customRadio.checked) {
      pronounDiv.style.display = "block";
    } else {
      pronounDiv.style.display = "none";
    }
  }

  customRadio.addEventListener("change", togglePronoun);
  maleRadio.addEventListener("change", togglePronoun);
  femaleRadio.addEventListener("change", togglePronoun);
});
