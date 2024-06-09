//concat() method
function full_Sentence() {
    var part_1 = "Because you ";
    var part_2 = "shook me ";
    var part_3 = "all night long!"
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() method
function slice_Method() {
    var Sentence = "The Intel i9, built for gamers looking for maximum performance to help play the latest games.";
    var Section = Sentence.slice(0, 31);
    document.getElementById("Slice").innerHTML = Section;
}

//upper case
function toUpperCase(){
    var word = "Hello World";
    document.getElementById("Upper Case").innerHTML = result;
}
let text = "Hello World";
let result = text.toUpperCase();

//search function


//numbers method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

//toprecision method
function precision_Method() {
    var X =12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}