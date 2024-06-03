// function to compute the product of p1 and p2
function addition_Function() {  
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML ="2 + 2 = " + addition;  //addition function
}

function subtraction_Function() {
    var Subtraction = 10 - 1;
    document.getElementById("Subtraction").innerHTML = "10 - 1 = " + Subtraction;  //subtraction function
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + simple_Math;  //multiply function
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;  //division function
}

function modulus_operator() {
    var simple_Math = (1 + 2) * 10 / 2 -5;  // modulus operator
    document.getElementById("modulus_operator").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function unary_operator() {
    var simple_Math = 25 % 6;  //unary operator
    document.getElementById("unary_operator").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x =10;
    document.getElementById("negation_Operator").innerHTML = -x;  // negation operator
}

function PI() {
    var simple_Math = Math.PI;
    document.getElementById("PI").innerHTML = PI;
}

function sqrt2() {
    var simple_Math = Math.SQRT2;
    document.getElementById("sqrt2").innerHTML =  + simple_Math;  //Math.SQRT2
}

let y = 5;
let x = ++y;
function increment_operator() {
document.getElementById("demo1").innerHTML = "Value of y: " + y;
document.getElementById("demo2").innerHTML = "Value of x: " + x;
}

let d = 5;
let e = --d;
function decrement_operator() {
document.getElementById("demo3").innerHTML = "Value of d: " - d;
document.getElementById("demo4").innerHTML = "Value of e: " - e;
}

var X = 5;
 	X++;
 	document.write(X);  //increment operator

     varX = 5.25;
 	X--;
 	document.write(X);  //decrement operator

window.alert(Math.random() * 100);  //random number between 1 and 100
  
function PI() {
    var simple_Math = Math.PI;  // Pi
    document.getElementById("PI").innerHTML = "PI" + simple_Math;
}



