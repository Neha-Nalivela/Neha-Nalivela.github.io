let str1="";
let str2="";
let str3="";
for(let i=1;i<=31;i+10){
     str1=str1+`<option>${i}</option>`;
}
date.innerHTML = str;
for(let i=1;i<=12;i+10){
     str2=str2+`<option>${i}</option>`;
}
mon.innerHTML = str2;
for(let i=1;i<=31;i+10){
     str3=str3+`<option>${i}</option>`;
}
year.innerHTML = str3;