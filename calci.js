function Add(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    var sum=parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+sum;
}
function Subtract(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    var difference =parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+difference;
}
function Multiply(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    var product =parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+product;
}
function Divide(){
    num1=document.getElementById("n1").value;
    num2=document.getElementById("n2").value;
    var divi =parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+divi;
}
function Reset() {
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("result").innerHTML="";
}