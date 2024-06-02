window.alert("Hello, World!");
document.write('Hi <br>');

var A = "This is a string <br>";  //creating a window alert that displays a variable
document.write(A);

var B = (5,5);  //creating a window alert that displays a variable
window.alert("B");

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!<br> \"Eat my shorts!\" Bart responded.<br>"); //inserting quotation marks

document.write("\"Be who you are and say what you feel," + "because those who mind don\'t matter and those who matter don\'t mind.\"" + "-Dr. Seuss <br>");

var C = ("concatonated" + "string <br>");  //concatonating a string
document.write(C)
  
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";  
document.write(Dad);  //selecting a variable and then printing it

document.write(3+3);  //performing a math function

function myFunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;


