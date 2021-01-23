let playerScore = 0;
let computerScore = 0;

function computerPlay () {
        const rps = ["Rock", "Paper", "Scissors"];
        return rps[Math.floor(Math.random()*rps.length)];
    }

function winLose () {
    playerScore == 5? playerWin() : computerWin ();
}

    function playerWin () {
       if (playerScore == 5) {
           let winBox = window.confirm(`Congratulations! You are the winner. ${playerScore}|${computerScore}. Would you like to play again?`);
         if (winBox == true) {
             game(); 
             winLose();
         } else if (winBox == false) {
             alert ("Thank you for playing.")
      }
     
    
    function computerWin () {
     if (computerScore == 5) {
           let loseBox = window.confirm(`Bad luck! You lose this time. ${playerScore}|${computerScore}. Would you like to play again?`);
       } if (loseBox = true) {
             game();
             winLose(); 
         } else if (loseBox = false) {
             alert ("Thank you for playing.")
       } 
    } 
}
    }

function game () {

    playerScore = 0;
    computerScore = 0;

    let playerSelection = 0;
    let computerSelection = 0;

    while (playerScore <5 && computerScore <5) {
       playRound(playerSelection, computerSelection);
   } 

      function playRound(playerSelection, computerSelection) {
        
        playerSelection = window.prompt("Rock, Paper, or Scissors?").toLowerCase();

        computerSelection = computerPlay();         
    
     if (playerSelection == "rock") {
        if (computerSelection ==  "Paper") {
            alert ("You Lose! Paper beats Rock.");
            return computerScore++
        } else if (computerSelection ==  "Scissors") {
            alert ("You win! Rock beats Scissors.");
            return playerScore++
        } else if (computerSelection == "Rock") {
            alert ("Tie!");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection ==  "Paper") {
            alert ("You win! Scissors beats paper.");
            return playerScore++
        } else if (computerSelection ==  "Scissors") {
            alert ("Tie!");
        } else if (computerSelection == "Rock") {
            alert ("You lose! Rock beats scissors.");
            return computerScore++
        }
    } else if (playerSelection == "paper") {
        if (computerSelection ==  "Paper") {
            alert ("Tie!");
        } else if (computerSelection ==  "Scissors") {
            alert ("You lose! Scissors beats paper.");
            return computerScore++
        } else if (computerSelection == "Rock") {
            alert ("You win! Paper beats rock.");
            return playerScore++
        }
    }  else if (playerSelection !==["rock", "paper", "scissors"] || null) {
            alert ("Invalid entry. Please enter either rock, paper, or scissors.")
            playRound ();
    }
  }
}
    



game();
winLose();


