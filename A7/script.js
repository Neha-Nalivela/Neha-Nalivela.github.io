function msg(){
    var num1=document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum=parseFloat(num1)+parseFloat(num2);
    var sub=parseFloat(num1)-parseFloat(num2);
    var mul=parseFloat(num1)*parseFloat(num2);
    var div=parseFloat(num1)/parseFloat(num2);
    document.getElementById('res').innerHTML=
    "Sum is:"+sum+"<br>"+
    "Sub is:"+sub+"<br>"+
    "Mul is:"+mul+"<br>"+
    "Div is:"+div;
}