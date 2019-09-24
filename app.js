function computerPlay() {
    const randomNum = Math.floor((Math.random() * 3) + 0)
    var choice = ["Rock", "Paper", "Scissors"]
    return choice[randomNum]
}

function playerPlay() {
    var selection = prompt("Select your weapon (Rock, Paper, Scissors): ")
    var choice = selection
    return choice
}

const computerSelection = computerPlay()
const playerSelection = playerPlay()

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Nothing happend!";
    } else if (playerSelection == "Rock" || computerSelection == "Paper"){
        return "You lose! Paper beat Rock";
    } else if (playerSelection == "Rock" || computerSelection == "Scissors"){
        return "You win! Rock beat Scissors";
    } else if (playerSelection == "Paper" || computerSelection == "Rock"){
        return "You win! Paper beat Rock";
    } else if (playerSelection == "Paper" || computerSelection == "Scissors"){
        return "You lose! Scissors beat Paper";
    } else if (playerSelection == "Scissors" || computerSelection == "Rock"){
        return "You lose! Rock beat Scissors";
    } else if (playerSelection == "Scissors" || computerSelection == "Paper"){
        return "You win! Scissors beat Paper";
    }
}