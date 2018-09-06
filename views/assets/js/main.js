
const letterPanel = document.getElementById('Letter-panel');

let alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
];
let chosenElOnScreen = [];
let i = 0;
let index = alphabet.length;
let guessNum = 0;
let usedLetters = [];

alphabet.forEach(el => {
    var z = document.createElement('div')
    z.className += "Letter_box";
    z.innerHTML = el;
    z.id = `z${i}`
    letterPanel.appendChild(z); 
    chosenElOnScreen.push(document.getElementById(`z${i}`))
    i++;
});

document.onclick = (e) => {
    keyCheck(e.target.innerHTML)
} 

document.onkeyup = (e) => {
   keyCheck(e.key);
}

keyCheck = (arg) => {
    i = 0;
    alphabet.forEach(el => {        
        if(arg === el) {
            usedLetters.push(alphabet[i])
            alphabet.splice(i, 1)
            removeEl(i, arg);
        }
        i++;
    });
}

removeEl = (arg, choice) => {
    chosenElOnScreen[arg].className += ' Letter_bank-used';
    chosenElOnScreen.splice(arg, 1);
    guessNum++;
    console.log('guess: ', guessNum, 'choice', choice)
}