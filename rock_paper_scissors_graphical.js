let playerSelection = 0
let computerSelection = 0;
let rps = 0;
let rpsOutput = 0;

// Add event listeners on startup
window.onload = function() {
        document.getElementById("rockButton").addEventListener( 'click', changeClassRock);
        document.getElementById("paperButton").addEventListener( 'click', changeClassPaper);
        document.getElementById("scissorsButton").addEventListener( 'click', changeClassScissors);
        
}    

document.getElementsByClassName("imageButton").onclick = game(playerSelection, computerSelection);
// Change player output on selection

function changeClassRock() {
    document.getElementById("playerImageOutput").className = "playerImageOutputRock";
    preGame();
}

function changeClassPaper() {
    document.getElementById("playerImageOutput").className = "playerImageOutputPaper";
    preGame();
}

function changeClassScissors() {
    document.getElementById("playerImageOutput").className = "playerImageOutputScissors";
    preGame();
}


function preGame() {
    playerSelector();
    displayComputerPlay (rps);
    if (playerSelection ="rock") {
        game(playerSelection, computerSelection);
    } else if (playerSelection ="scissors") {
        game(playerSelection, computerSelection);
    } else if (playerSeletcion ="paper") {
        game(playerSelection, computerSelection);
    }




// Computer decision function



// Game function


    function displayComputerPlay (rps) {
        cIO = 
        rps = ["Rock", "Paper", "Scissors"];
        let rpsOutput = Math.floor(Math.random()*rps.length);
        if (rpsOutput == 0) {
            document.getElementById("computerImageOutput").className += "computerImageOutputRock";
        } else if (rpsOutput == 1) {
            document.getElementById("computerImageOutput").className += "computerImageOutputPaper";
        } else if (rpsOutput == 2) {
            document.getElementById("computerImageOutput").className += "computerImageOutputScissors";
        }
    }
    




function playerSelector() {
    if (document.getElementById(("playerImageOutput")).className == "playerImageOutputRock") {
        return playerSelection="rock";
    } else if (document.getElementById(("playerImageOutput")).className == "playerImageOutputPaper") {
        return playerSelection="paper";
    } else if (document.getElementById(("playerImageOutput")).className == "playerImageOutputScissors") {
        return playerSelection="scissors";
    } else alert;
    }

function game(playerSelection, computerSelection) {     
        
    computerSelection = rpsOutput;

     if (playerSelection == "rock") {
        if (computerSelection ==  "Paper") {
            alert ("You Lose! Paper beats Rock.");
        
        } else if (computerSelection ==  "Scissors") {
            alert ("You win! Rock beats Scissors.");
            
        } else if (computerSelection == "Rock") {
            alert ("Tie!");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection ==  "Paper") {
            alert ("You win! Scissors beats paper.");
            
        } else if (computerSelection ==  "Scissors") {
            alert ("Tie!");
        } else if (computerSelections == "Rock") {
            alert ("You lose! Rock beats scissors.");
            
        }
    } else if (playerSelection == "paper") {
        if (computerSelection ==  "Paper") {
            alert ("Tie!");
        } else if (computerSelection ==  "Scissors") {
            alert ("You lose! Scissors beats paper.");
            
        } else if (computerSelection == "Rock") {
            alert ("You win! Paper beats rock.");
            
        }
        }
  
    





// Change computer output on execution of computer choice

// Change scores on execution

// Change smiley face on player score execution

    }}
