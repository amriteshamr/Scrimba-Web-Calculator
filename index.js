function add(){
    num1 = parseFloat(document.getElementById("number-1").value);
    num2 = parseFloat(document.getElementById("number-2").value);
    var ans = num1 + num2;
    document.getElementById("result").textContent = "Result: " + ans
}
function sub(){
    num1 = parseFloat(document.getElementById("number-1").value);
    num2 = parseFloat(document.getElementById("number-2").value);
    var ans = num1 - num2;
    document.getElementById("result").textContent = "Result: " + ans
}
function mul(){
    num1 = parseFloat(document.getElementById("number-1").value);
    num2 = parseFloat(document.getElementById("number-2").value);
    var ans = num1 * num2;
    document.getElementById("result").textContent = "Result: " + ans
}
function div(){
    num1 = parseFloat(document.getElementById("number-1").value);
    num2 = parseFloat(document.getElementById("number-2").value);
    var ans = num1 / num2;
    document.getElementById("result").textContent = "Result: " + ans
}