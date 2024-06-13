function Brand_Function() {
    var Brand_Output;
    var Brand = document.getElementById("Brand_Input").value;
    var Brand_String = " is an excellent retro computer!";
    switch(Brand) {
        case "Amiga":
            Brand_Output = "Amiga" + Brand_String;
        break;
        case "Atari":
            Brand_Output = "Atari" + Brand_String;
        break;
        case "Commodore":
            Brand_Output = "Commodore" + Brand_String;
        break;  
        case "Compaq":
            Brand_Output = "Compaq" + Brand_String;
        break;
        case "Tandy":
            Brand_Output = "Tandy" + Brand_String;
        break;
        default:
            Brand_Output = "Please enter a brand exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Brand_Output;
}

//GETELEMENTSBYCLASSNAME() METHOD
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed! Ow wow!";
}

//COLOR GRADIENT
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
