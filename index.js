var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}