function computerSelection() {
    var randomNum = Math.floor((Math.random() * 3) + 0)
    var choice = ["Rock", "Paper", "Scissors"]
    return choice[randomNum];
}

function playerSelection() {
    var choice = prompt("Select your weapon (Rock, Paper, Scissors): ")
    return choice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        null;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You lose! Paper beat Rock"
    }
}