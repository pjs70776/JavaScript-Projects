document.write("11" + 2);

//infinity
document.write(2E310);

//-infinity
document.write(-3E310);

//greater than
document.write(10 > 2);

//less than
document.write(10 < 2);

console.log(2+2);

//double equal true
document.write(10 == 10);

//double equal false
document.write(10 == 11);

//triple equal true
X = 10;   
Y = 10;
document.write(X === Y);

//triple equal false
X = 10;   
Y = "10";
document.write(X === Y);

//triple equal false
X = 10;
Y = ten;
document.write(X === Y);

//logical operators true
document.write(5 > 1 && 10 > 3);

//logical operators false
document.write(5 > 1 && 10 > 30);

//logical oeprators false
document.write(5>10 || 10>4);

//not operator false
function not_Function_false() {
    document.getElementById("Not").innerHTML= ! (20>10);
}

//not operator true
function not_Function_true() {
    document.getElementById("Not_false").innerHTML= ! (2>10);
}