//global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable 
function Add_numbers_3() {
    var Y = 10;
    console.log(15 + X);
}
function Add_numbers_4() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

//local variable with error put in for debugging purposes (var Z)
function Add_numbers_3() {
    var Z = 10;
    console.log(15 + X);
}
function Add_numbers_4() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

//if statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How is everything going?";
    }
}

//else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink a beer!";
    }
    else {
        Drink = "You cannot have a beer, sorry about your luck.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}