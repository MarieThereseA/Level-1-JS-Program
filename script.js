const startreset = document.getElementById("sr");
startreset.addEventListener("click", startGame)

const outputremain = document.getElementById("r");
const outputguess = document.getElementById("g");
const outputlog = document.getElementById("log")

const buttons = document.getElementsByClassName('b');

for(const button of buttons){
    button.addEventListener("click", changeGuess)
}

const submit = document.getElementById("sub");
log.addEventListener("click", sendGuess);

function startGame(){

}

function changeGuess(){

}

function sendGuess(){
    
}