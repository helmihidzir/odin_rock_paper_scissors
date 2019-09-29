let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 1;

function randomNum(){
    return Math.floor((Math.random() * 3) + 0);
}

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    return choice[randomNum()];
}

function playerPlay(){
    return (prompt("Select your weapon (Rock, Paper, Scissors): ")).toLowerCase();
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay();
    if (playerSelection === computerSelection) {
        alert("It's a draw");      
    } else if ((playerSelection === "rock") && (computerSelection === "paper")){
        computerScore += 1;
        alert("You lose! Paper beat Rock");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        playerScore += 1;
        alert("You win! Rock beat Scissors");
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore += 1;
        alert("You win! Paper beat Rock");
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")){
        computerScore += 1;
        alert("You lose! Scissors beat Paper");
    } else if ((playerSelection === "scissors" && computerSelection === "rock")){
        computerScore += 1; 
        alert("You lose! Rock beat Scissors");
    } else if ((playerSelection === "scissors" && computerSelection === "paper")){
        playerScore += 1;
        alert("You win! Scissors beat Paper");
    }else{
        alert("Error!");
    }
}

function game(){
    while (round != 0){
        playRound(playerSelection, computerPlay())
        round--;
    }
    if(playerScore > computerScore){
        alert(`Congratulations. You win this game!\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
    } else if(computerScore > playerScore) {
        alert(`You lose this game.\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
    } else if(computerScore === playerScore){
        alert(`It's a tie for this game.\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`);
    }
}

window.addEventListener('click', function() {
    document.addEventListener('#game', game());
})