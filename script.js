//Number to be guessed
ran = Math.floor((Math.random() * 100) + 1);
console.log("random: " + ran);

//Start of the game elements & Game elements
const startdisplay = document.getElementsByClassName("start");
const gamedisplay= document.getElementsByClassName("game");

//Start, Restart & Submit Buttons
const startbutton = document.getElementById("begin");
const restartbutton = document.getElementById("restart");
const resetbutton = document.getElementById("restart1");
const commitbutton = document.getElementById("sub");

commitbutton.addEventListener("click", sendGuess);
startbutton.addEventListener("click", startGame);
restartbutton.addEventListener("click", restart);
resetbutton.addEventListener("click", restart);

//Remainder, Guess, Hint, & Guess log elements
const outputhint = document.getElementById("hint");
const outputremain = document.getElementById("r");
const outputguess = document.getElementById("g");
const outputlog = document.getElementById("log");

//Guess editing buttons
document.querySelectorAll('button').forEach(occurence => {
let id = occurence.getAttribute('id');
occurence.addEventListener('click', function(){changeGuess(id); });
});

//Starts the game
function startGame(){
    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = true;
    }

    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = false;
    }
}

function restart(){
    document.getElementById("lose").hidden = true;
    document.getElementById("win").hidden = true;
    document.getElementById("rbutton").hidden = true;


    for (var i = 0; i < gamedisplay.length; i++){
        gamedisplay.item(i).hidden = true;
    }

    for (var i = 0; i < startdisplay.length; i++){
        startdisplay.item(i).hidden = false;
    }


    ran = Math.floor((Math.random() * 100) + 1);
    console.log("random: " + ran);

    outputhint.textContent = "Enter Your Guess"
    outputremain.textContent = "5";
    outputlog.textContent = "";
    outputguess.textContent = "50";
}

function changeGuess(bt){
    console.log("click");
    let num = Number(outputguess.textContent);
    if (bt == "b1"){
        if (num + 1 <= 100){
            num++;
            outputguess.textContent = num++;
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b5"){
        if (num + 5 <= 100){
            num += 5;
            outputguess.textContent = num;
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b10"){
        if (num + 10 <= 100){
            num += 10;
            outputguess.textContent = num;
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b25"){
        if (num + 25 <= 100){
            num += 25;
            outputguess.textContent = num;            
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b-1"){
        if (num - 1 >= 1){
            num--;
            outputguess.textContent = num;            
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b-5"){
        if (num - 5 >= 1){
            num -=5 ;
            outputguess.textContent = num;            
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b-10"){
        if (num - 10 >= 1){
            num -=10 ;
            outputguess.textContent = num;            
        }else{
            alert("Out of Bounds");
        }
    }else if (bt == "b-25"){
        if (num - 25 >= 1){
            num -=25 ;
            outputguess.textContent = num;            
        }else{
            alert("Out of Bounds");
        }
    }
}

function sendGuess(){
    let remain = Number(outputremain.textContent);
    let guess = Number(outputguess.textContent);
    let hint = "";
    
    console.log("g" + guess);
    console.log("random" + ran);

    if (ran - guess == 0){
        win();
    }else if(Math.abs(ran - guess) <= 5){
        console.log("operate: " + (ran - guess));
        hint = "Very Hot";
    }else if (Math.abs(ran - guess) <= 8){
        hint = "Hot";
        remain--;
    }else if (Math.abs(ran - guess) <= 15){
        hint = "Very Warm";
        remain--;
    }else if (Math.abs(ran - guess) <= 20) {
        hint = "Warm";
        remain--;
    }else if (Math.abs(ran - guess) <= 30) {
        hint = "Cool";
        remain--;
    }else if (Math.abs(ran - guess) <= 40) {
        hint = "Very Cool";
        remain--;
    }else if (Math.abs(ran - guess) <= 55) {
        hint = "Cold";
        remain--;
    }else{
        hint = "Very Cold";
        remain--;
    }

    if (remain == 0){
        gameover();
    }else {
        const node = document.createElement("p");
        const textnode = document.createTextNode(guess + " " + hint);
        node.appendChild(textnode);
        outputlog.appendChild(node);
        outputhint.textContent = hint;
        outputremain.textContent = remain;
    }
}

function gameover(){
    for (var i = 0; i < gamedisplay.length; i++){
        if(gamedisplay.item(i).id != "restart"){
            gamedisplay.item(i).hidden = true;
        }
    }

    document.getElementById("answerl").textContent = ran;
    document.getElementById("lose").hidden = false;
    document.getElementById("rbutton").hidden = false;  

}

function win(){
    for (var i = 0; i < gamedisplay.length; i++){
        if(gamedisplay.item(i).id != "restart"){
            gamedisplay.item(i).hidden = true;
        }
    }

    document.getElementById("answerw").textContent = ran;
    document.getElementById("win").hidden = false;
    document.getElementById("rbutton").hidden = false;
}