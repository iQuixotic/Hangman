console.log("i'm here");

var eachLetter = document.querySelector("#eachBlank");
// Create an array to serve as a word-bank
var words = [
    "helpa", 
    "javascripta",
    "newas",
    "wowa", 
    "topplea",
    "grapplea",
    "foxa", 
    "nooba"
];
// use these to track what letters have been used
var chosenLetter = ['a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o',
                    'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y',
                    'z'
];
var answerArr = [];
var selected = Math.floor((Math.random() * 8)); // Selects a number corresponding to an element in the array
var chosenWord= (words[selected]); // Turns the number provided by var selected into an actual /word selection/
var brokenWord= chosenWord.split(''); // splits the chosenWord into letters
var guess = ["1"];
var specialArr = [];
var numGuess = 10;
var gameOver = false;
var firstFail = true;
var secondFail = true;
var thirdFail = true;
var infinity = false;
//var guess = document.getElementById("guess").value;
// guess = guess.toLowerCase();
// console.log(guess);

// console.log(brokenWord);


//passes a letter through to check for
function letterInput() {
    if (!gameOver){
    specialArr.push(guess);
    guess = document.getElementById("guess").value;
    guess = guess.toLowerCase();
    for (var i = 0; i < brokenWord.length; i++) {
        if (guess === brokenWord[i]) {
            answerArr[i] = guess + " ";
        } else if (answerArr[i] !== guess && answerArr[i] !== "_" + " ") {
            answerArr[i] = answerArr[i];
        } else
            answerArr[i] = "_" + " ";
        document.getElementById("eachBlank").innerHTML = answerArr;
    }
    if (!infinity){
    numGuess--;
    } else { numGuess++; }
    document.getElementById("numGuess").innerHTML = numGuess;
    checkStatus();
} else { document.getElementById("lost").innerHTML = ("PERHAPS YOU DID NOT HEAR ME YOU LOST SUCKA... :( ");
}
}

// Draws a blank for each letter of the word
function startUp(){
    for (var i = 0; i < brokenWord.length; i++) {
        answerArr[i] = "_" + " ";
    }
    document.getElementById("eachBlank").innerHTML = answerArr;
}

//generates a brand new word
function wordGenerate() {
    selected = Math.floor((Math.random() * 8)); // Selects a number corresponding to an element in the array
    chosenWord = (words[selected]); // Turns the number provided by var selected into an actual /word selection/
    brokenWord = chosenWord.split(''); // splits the chosenWord into letters
    answerArr = [];
    for (var i = 0; i < brokenWord.length; i++) {
        answerArr[i] = "__ " + " ";
    }
    answerArr.join("");
    document.getElementById("eachBlank").innerHTML = answerArr;
    scoreReset();
    console.log(brokenWord);
}

function scoreReset() {
    gameOver = false;
    if (numGuess == 0 && firstFail) {
        numGuess = 13;
        document.getElementById("numGuess").innerHTML = numGuess;
        firstFail = false;
      //  secondFail = true;
        document.getElementById("lost").innerHTML = ("Welcome to your next attempt !! I took the liberty of turning down the difficulty a little just for you !!! :)");
        } else if (numGuess == 0 && secondFail) {
        numGuess = 45;
        document.getElementById("numGuess").innerHTML = numGuess;
        document.getElementById("lost").innerHTML = ("You're really killing me here... >(");
        document.getElementById("lost2").innerHTML = ("I gave you a few extra  guesses this time..");
        document.getElementById("lost3").innerHTML = ("So, to reiterate... there are 26 letters in the English Alphabet ");
        document.getElementById("lost4").innerHTML = ("and I have given you 45 chances to guess the right ones... ");
        document.getElementById("lost5").innerHTML = ("Don't mess this up.. ");
        secondFail = false;
        //thirdFail = true;
        } else if (numGuess == 0 && thirdFail) {
        numGuess = 45;
        document.getElementById("numGuess").innerHTML = numGuess;
        document.getElementById("lost").innerHTML = ("You're really killing me here... >(");
        document.getElementById("lost2").innerHTML = ("I gave you a few extra  guesses this time..");
        document.getElementById("lost3").innerHTML = ("So, to reiterate... there are 26 letters in the English Alphabet ");
        document.getElementById("lost4").innerHTML = ("and I have given you 45 chances to guess the right ones... ");
        document.getElementById("lost5").innerHTML = ("Don't mess this up.. ");
        secondFail = false;
        thirdFail = false;
    } else if (numGuess == 0 && !thirdFail) {
        document.getElementById("lost").innerHTML = ("Screw it, I'll just reverse the counter");
        document.getElementById("lost").innerHTML = ("");
        document.getElementById("lost2").innerHTML = ("");
        document.getElementById("lost3").innerHTML = ("");
        document.getElementById("lost4").innerHTML = ("");
        document.getElementById("lost5").innerHTML = ("");
        numGuess = 10;
        infinity = true;
    } else {
        numGuess = 10;
        gameOver = false;
    }
} 


function checkStatus () {
    numGuess = document.getElementById("numGuess").innerHTML;
    if (numGuess == 0) {
    document.getElementById("lost").innerHTML = ("You have lost the game. :( May God have mercy on your soul... :( ");
    gameOver = true;
    } else { gameOver = false;
    }
}






