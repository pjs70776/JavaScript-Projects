//ternary function
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById ("Ride").innerHTML = Can_ride + " to ride.";
}

//ternary function
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById ("Vote").innerHTML = Can_vote + " to vote.";
}

//constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innterHTML = 
    "Erik drives a" + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufatured in " + Erik.Vehicle_Year;
}  

//nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count() {
        var Starting_point = 10;							
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}
