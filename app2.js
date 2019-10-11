var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissor");

var playerChoice = document.querySelector("#playerChoice");
var computerChoice = document.querySelector("#computerChoice");

let playerSelection;
let playerScore = 0;
let computerScore = 0;

function randomNum(){
    return Math.floor((Math.random() * 3) + 0);
}

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[randomNum()];
}

function playerPlay(){
    if (rock) {
        return "rock";
    } else if (paper) {
        return "paper";
    } else if (scissor) {
        return "scissors";
    } 
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay();
    if (playerSelection === computerSelection) {
        alert("It's a draw");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        computerScore += 1;
        alert("You lose! Paper beat Rock");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        playerScore += 1;
        alert("You win! Rock beat Scissors");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore += 1;
        alert("You win! Paper beat Rock");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        computerScore += 1;
        alert("You lose! Scissors beat Paper");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "scissors" && computerSelection === "rock")){
        computerScore += 1; 
        alert("You lose! Rock beat Scissors");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    } else if ((playerSelection === "scissors" && computerSelection === "paper")){
        playerScore += 1;
        alert("You win! Scissors beat Paper");
        playerChoice.innerHTML = playerSelection;
        computerChoice.innerHTML = computerSelection;
    }else{
        alert("Error!");
    }
}

function game() {
    rock.addEventListener("click", function(){
        playRound("rock",computerPlay());
    } )
    
    paper.addEventListener("click", function(){
        playRound("paper",computerPlay());
    } )

    scissor.addEventListener("click", function(){
        playRound("scissors",computerPlay());
    } )
}
game();
