const add=()=>{
    let a=parseFloat(document.getElementById('n1').value);
    let b=parseFloat(document.getElementById('n2').value);
    document.getElementById("res").innerHTML="Addition is"+(a+b);
}
const sub=()=>{
    let a=parseFloat(document.getElementById('n1').value);
    let b=parseFloat(document.getElementById('n2').value);
    document.getElementById("res").innerHTML="Subtraction is"+(a-b);
}
const mul=()=>{
    let a=parseFloat(document.getElementById('n1').value);
    let b=parseFloat(document.getElementById('n2').value);
    document.getElementById("res").innerHTML="Multiplication is"+(a*b);
}
const div=()=>{
    let a=parseFloat(document.getElementById('n1').value);
    let b=parseFloat(document.getElementById('n2').value);
    document.getElementById("res").innerHTML="Division is"+(a/b);
}