//this variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win condtions.
let selectedSquares = [];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //this condtion ensures a square hasnt been selected already.
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condtion checks whos turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.jpg is placed in HTML
            select.style.backgroundImage = 'url("images/ex.jpg")';
            //active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.jpg is placed in HTML
            select.style.backgroundImage = 'url("images/circle.jpg")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this conditon is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'.
            activePlayer = 'O';
            //if active player is anything other than 'X'.
        } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //this function plays placement sound. may need to change to lower case Audio
        audio('./media/drop.mp3');
        //this conditon checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //this function disables clicking for computers turn.
            disableClick();
            //this function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work.
        return true;
    }
    //this function results in a random square being selected by the computer.
    function computersTurn() {
        //this boolean is needed for our while loop.
        let success = false;
        //this variable stores a random number 0-8.
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //a random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square has not been selected yet.
            if (placeXOrO(pickASquare)) {
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}
//this function parses the selectedSquares arrayu to search for win conditions.
//drawLine() function is called to draw a line on the screen if the conditon is met.
function checkWinConditions() {
    // X 0,1,2 condtion.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 50, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    //this conditon checks for a tie.  if non of the above conditions are met and 
    //9 squares are selected for the code executes.
    else if(selectedSquares.length >= 9) {
        //this function plays the tie game sound.
        audio('/media/explode.mp3');
        //this function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }
    //this function checks if an array includes 3 strings.  it is used to check for 
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array then
        //true is returned and our else if conditon executres the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//this function makes our body element temporarily unclickable.
function disableClick() {
    //this makes our body unclickable.
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //this line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //this line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //this line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //this variable stores temp x axis data we update in our animation loop
        x = x1,
        //this variable stores temp y axis data we update in our animation loop
        y = y1;
    //this function interacts with the canvas.
    function animateLineDrawing() {
        //this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop iteratoin.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //this method moves us to the end point in our line.
        c.lineTo(x, y);
        //this method sets the width of our line.
        c.lineWidth = 10;
        //this method sets the color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws everything we laid out above
        c.stroke();
        //this condition checks if we've reached the endpoints
        if (x1 <= x2 && y1 < y2) {
            //this conditon adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            //this condition adds 1- to the previous end y endpoint.
            if (y < y2) { y += 10; }
            //this condition is similar to the one above.
            //this is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        //this conditon is similar to the one above.
        //this is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y < y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this function clears our canvas after our win line is drawn.
    function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds.
    audio('./media/claping.mp3');
    //this line calls our main animation loop.
    animateLineDrawing();
    //this line waits 1 second. then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//this function resets the game in the even of a tie or win.
function resetGame() {
    //this for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //this variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //this removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over.
    selectedSquares = [];
}