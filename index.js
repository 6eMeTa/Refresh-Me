var randomNumber = 0;
var playerOne = 0;
var playerTwo = 0;
var readyState = false;

var playerOneDice = document.querySelector(".img1");
var playerTwoDice = document.querySelector(".img2");

function playerOneFunc(){
    console.log(playerOne);

    randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.round(randomNumber);
    playerOne = randomNumber;
}

function playerTwoFunc(){
    randomNumber = Math.random();
    randomNumber = randomNumber * 6;
    randomNumber = Math.floor(randomNumber);
    playerTwo = randomNumber;
    console.log(playerTwo);
}

playerOneFunc();
playerTwoFunc();

if (playerOne == 0 || playerTwo == 0){
    while (readyState != true){
        playerOneFunc();
        playerTwoFunc();
        if (playerOne > 0 || playerTwo < 7){
        readyState = true;
        }
    }
    playerOneFunc();
    playerTwoFunc();
}


    console.log(playerOne);
    playerOneDice.src = "./images/dice" + playerOne + ".png";

    console.log(playerTwo);
    playerTwoDice.src = "./images/dice" + playerTwo + ".png";
