//loop
function Counting_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//length property
let text = "Hello World!";
let length = text.length;

document.getElementById("length").innerHTML=length;


//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function List_of_Instruments() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array 
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    document.getElementById("Array").innerHTML = "In this pic, the cat is " +
        Cat_Picture[1] + ".";
}

//constant
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"wood grain", year_made: "1969"};  //changed color from black to wood grain, added year_made.
    Musical_Instrument.color = "wood grain";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.year_made + "," + Musical_Instrument.color + " " +  //added .year_made and .color (changed)
        Musical_Instrument.type + " was " + Musical_Instrument.price;
   
}

//let


