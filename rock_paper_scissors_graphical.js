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
    game(playerSelection, rpsOutput);




// Computer decision function



// Game function


    function displayComputerPlay () {
        rps = ["Rock", "Paper", "Scissors"];
        rpsOutput = Math.floor(Math.random()*rps.length);
        if (rpsOutput == 0) {
            const computerImageOutput = document.querySelector ("#computerImageOutput");
            computerImageOutput.className = "computerImageOutputRock";
        } else if (rpsOutput == 1) {
            const computerImageOutput = document.querySelector("#computerImageOutput");
            computerImageOutput.className = "computerImageOutputPaper";
        } else if (rpsOutput == 2) {
            const computerImageOutput = document.querySelector("#computerImageOutput");
            computerImageOutput.className = "computerImageOutputScissors";
        }
        return rpsOutput;
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

function game(playerSelection, rpsOutput) {     
        
    if (playerSelection == "rock") {
        if (rpsOutput ==  1) {
            alert ("You Lose! Paper beats Rock.");
        
        } else if (rpsOutput ==  2) {
            alert ("You win! Rock beats Scissors.");
            
        } else if (computerSelection == 0) {
            alert ("Tie!");
        }
    } else if (playerSelection == "scissors") {
        if (rpsOutput ==  1) {
            alert ("You win! Scissors beats paper.");
            
        } else if (rpsOutput ==  2) {
            alert ("Tie!");
        } else if (rpsOutput == 0) {
            alert ("You lose! Rock beats scissors.");
            
        }
    } else if (playerSelection == "paper") {
        if (rpsOutput ==  1) {
            alert ("Tie!");
        } else if (rpsOutput ==  2) {
            alert ("You lose! Scissors beats paper.");
            
        } else if (rpsOutput == 0) {
            alert ("You win! Paper beats rock.");
            
        }
        }
  
    





// Change computer output on execution of computer choice

// Change scores on execution

// Change smiley face on player score execution

    }}
