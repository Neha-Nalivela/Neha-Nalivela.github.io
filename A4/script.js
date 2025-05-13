// Populate dates 1–31
let str1 = "";
for (let i = 1; i <= 31; i++) {
  str1 += `<option value="${i}">${i}</option>`;
}
document.getElementById("date").innerHTML = str1;

// Populate months 1–12
let str2 = "";
for (let i = 1; i <= 12; i++) {
  str2 += `<option value="${i}">${i}</option>`;
}
document.getElementById("mon").innerHTML = str2;

// Populate years 1980–2025
let str3 = "";
for (let i = 1980; i <= 2025; i++) {
  str3 += `<option value="${i}">${i}</option>`;
}
document.getElementById("year").innerHTML = str3;
