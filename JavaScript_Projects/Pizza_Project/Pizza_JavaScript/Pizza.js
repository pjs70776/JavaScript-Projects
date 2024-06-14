function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, gwoing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectdSize = sizeArray[i].value;
            text1 = text1+selectdSize+"<br>";
        }
    }
    if (selectdSize === "Personal Pizza") {
        sizeTotal = 6;    
    } else if (selectdSize === "Small Pizza") {
        sizeTotal = 8;
    }else if (selectdSize === "Medium Pizza") {
        sizeTotal = 10;
    }else if (selectdSize === "Large Pizza") {
        sizeTotal = 14;
    }else if (selectdSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }else if (selectdSize === "XXL Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectdSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will be passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};