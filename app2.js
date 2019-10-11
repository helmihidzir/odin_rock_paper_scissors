var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissor");

// var playerChoice = document.querySelector("#playerChoice");
// var computerChoice = document.querySelector("#computerChoice");

var playerResult = document.querySelector("#playerScore");
var computerResult = document.querySelector("#computerScore");

var result = document.querySelector("#result");

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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        alert("It's a draw");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        computerScore += 1;
        alert("You lose! Paper beat Rock");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        playerScore += 1;
        alert("You win! Rock beat Scissors");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore += 1;
        alert("You win! Paper beat Rock");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        computerScore += 1;
        alert("You lose! Scissors beat Paper");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "scissors" && computerSelection === "rock")){
        computerScore += 1; 
        alert("You lose! Rock beat Scissors");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    } else if ((playerSelection === "scissors" && computerSelection === "paper")){
        playerScore += 1;
        alert("You win! Scissors beat Paper");
        playerResult.innerHTML = playerScore;
        computerResult.innerHTML = computerScore;
    }else{
        alert("Error!");
    }
}

function checkScore() {
    if (playerScore === 2) {
        result.innerHTML = "Congratulations !!! You win this round!"
        setTimeout(() => window.location.reload(), 2000);
    } else if (computerScore === 2) {
        result.innerHTML = "Sorry, you lose this round! Try again."
        setTimeout(() => window.location.reload(), 2000);
    }
}

function game() {
    rock.addEventListener("click", function(){
        playRound("rock", computerPlay());
        checkScore();
    } )
    
    paper.addEventListener("click", function(){
        playRound("paper", computerPlay());
        checkScore();
    } )

    scissor.addEventListener("click", function(){
        playRound("scissors", computerPlay());
        checkScore();
    } )
}

game();



