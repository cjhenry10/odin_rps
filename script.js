// array of strings for options and variable to store the last winner in 5 round game
let options = ["rock", "paper", "scissors"];
let lastWinner = "";
let playerScore = 0;
let computerScore = 0;

const gameDiv = document.getElementById("game");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

// add text
rockBtn.textContent = "ROCK";
paperBtn.textContent = "PAPER";
scissorBtn.textContent = "SCISSORS";

const buttonDiv = document.createElement("div");

// add buttons to page
gameDiv.appendChild(buttonDiv);
buttonDiv.appendChild(rockBtn);
buttonDiv.appendChild(paperBtn);
buttonDiv.appendChild(scissorBtn);

const resultDiv = document.createElement("div");
const resetBtn = document.createElement("button");
gameDiv.appendChild(resultDiv);



// generate random number 0 - x
function randInt(x) {
    return Math.floor(Math.random() * x);
}

// has computer randomly select from options array
function computerPlay() {
    return options[randInt(3)];
}

// checks who won based on rock paper scissors rules
function play(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            lastWinner = "";
            resultDiv.textContent = "That round was a tie.";
            return;
            break;
        case (((playerSelection === "rock") && (computerSelection === "scissors")) || ((playerSelection === "paper") && (computerSelection === "rock")) || ((playerSelection === "scissors") && (computerSelection === "paper"))):
            lastWinner = "player";
            // increments score and display new score
            playerScore++;
            document.getElementById("player-score").textContent = playerScore;
            if (playerScore === 5) {
                declareWinner();
                return;
            }
            resultDiv.textContent = `You won that round. ${playerSelection} beats ${computerSelection}!`;
            break;
        default:
            lastWinner = "computer";
            computerScore++;
            document.getElementById("computer-score").textContent = computerScore;
            if (computerScore === 5) {
                declareWinner();
                return;
            }
            resultDiv.textContent = `You lost that round. ${computerSelection} beats ${playerSelection}!`;
    }
}

// adds winner message to page and resets scores;
function declareWinner() {
    resultDiv.textContent = `${lastWinner} has won!`;
    playerScore = 0;
    computerScore = 0;
    lastWinner = "";
    resetBtn.textContent = "Play Again";
    resetBtn.onclick = restartGame;
    gameDiv.appendChild(resetBtn);
}

function restartGame() {
    resultDiv.textContent = "";
    gameDiv.removeChild(resetBtn);
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("player-score").textContent = playerScore;
}

// plays the game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // event listeners (different forms)
    rockBtn.addEventListener("click", () => {
        play("rock", computerPlay());
    });
    paperBtn.onclick = () => {
        play("paper", computerPlay());
    }
    scissorBtn.onclick = () => {play("scissors", computerPlay())}

    // pop up to get player choice
    // let playerChoice = prompt("Choose 'rock', 'paper', or 'scissors'.");
    // let computerChoice = computerPlay();
    // let result = play(playerChoice, computerChoice);
    // console.log(result);
    // updates the score
    // if (lastWinner === "player") {
    //     playerScore ++;
    // }
    // if (lastWinner === "computer") {
    //     computerScore++;
    // }
    // // reset lastWinner to use for next round
    // lastWinner = "";

    // // display message based on the result of the game
    // if (playerScore > computerScore) {
    //     console.log(`You won! ${playerScore} to ${computerScore}.`);
    // }
    // else if (playerScore < computerScore) {
    //     console.log(`You lost. ${computerScore} to ${playerScore}.`);
    // }
    // else {
    //     console.log("You tied after 5 rounds.");
    // }
}
game();