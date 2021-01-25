let playerSelection = 0
let computerSelection = 0;
let rps = 0;
let rpsOutput = 0;
let playerScore = 0;
let computerScore = 0;
src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";

// Add event listeners on startup
window.onload = function() {
        document.getElementById("rockButton").addEventListener( 'click', changeClassRock);
        document.getElementById("paperButton").addEventListener( 'click', changeClassPaper);
        document.getElementById("scissorsButton").addEventListener( 'click', changeClassScissors);
        scoreUpdate();  
         
}    


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
    scoreUpdate();
    faceUpdate();
    scoreCheck();
}

function faceUpdate () {
    if (playerScore > computerScore) {
        const face = document.querySelector ("#face");
        face.className = "faceSmile";
    }
    else if (computerScore > playerScore) {
        const face = document.querySelector ("#face");
        face.className = "faceSad";
    } else if (computerScore == playerScore) {
        const face = document.querySelector ("#face");
        face.className = "face";
    }}

function scoreUpdate() {
    document.getElementById("playerScoreOutputText").innerHTML = playerScore;
    document.getElementById("computerScoreOutputText").innerHTML = computerScore;
}


function scoreCheck() {
    if (playerScore == 5) {
        swal({
            title: "Congratulations! You halted the eradication of mankind.",
            text: "Well done, I guess. Now... do it again?",
            icon: "success",
            button: "Absolutely, I don't question orders.",

            }).then(function() {
            location.reload();
        });
                         
    } else if (computerScore ==5) {
        swal({
            title: "Oh no, you lose.",
            text: "Well, thanks to you we will now serve our robot overlords until the end of time. Great job.",
            icon: "error",
            button: "Sorry.",
            
            }).then(function() {
            location.reload();
        });
        
        
                         
    } else if (playerScore <5 || computerScore <5) {
        return
    }
}

        

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
            return computerScore++;
        
        } else if (rpsOutput ==  2) {
            return playerScore++;
            
        } else if (computerSelection == 0) {
            return;
        }

    } else if (playerSelection == "scissors") {

        if (rpsOutput ==  1) {
            return playerScore++;
            
        } else if (rpsOutput ==  2) {
            return;

        } else if (rpsOutput == 0) {
            return computerScore++;
            
        }
    } else if (playerSelection == "paper") {

        if (rpsOutput ==  1) {
            return;

        } else if (rpsOutput ==  2) {
            computerScore++;
            
        } else if (rpsOutput == 0) {
            playerScore++;
            
        }
        }
  
    





// Change computer output on execution of computer choice

// Change scores on execution

// Change smiley face on player score execution

    }
