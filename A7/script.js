for(let i=10;i<=100;i++){
    let str=str+`<option>${i}</option>`;
}
num1.innerHTML=str
const msg = () => {
    var num1=parserFloat(document.getElementById('num1')).value;
    var num2 = parserFloat(document.getElementById('num2')).value;
    let r1=add(num1,num2);
    let r2=sub(num1,num2);
    let r3=mul(num1,num2);
    let r4=div(num1,num2);
    dvAdd.innerHTML="Addition"+r1;
    dvSub.innerHTML="Substraction"+r2;
    dvMul.innerHTML="Multiplication:"+r3;
    dvDiv.innerHTML="Division:"+r4;
};
function add(num1,num2){
    return num1+num2;
};
function sub(num1,num2){
    return num1-num2
};
function mul(num1,num2){
    return num1*num2;
};
function div(num1,num2){
    return num1/num2;
};
