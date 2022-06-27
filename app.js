
//Return random Token for Rock, Paper, Scissors game
function computerPlay(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'Rock';
            
        case 1:
            return 'Paper';
            
        case 2:
            return 'Scissors';
            
    }
}

let playerScore = 0;
let computerScore = 0;

//Play single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return `Its a Draw!, Computer chooses ${computerSelection} and Player chooses ${playerSelection}`;
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Scissors' ||
            playerSelection == 'Scissors' && computerSelection == 'Paper' ||
            playerSelection == 'Paper' && computerSelection == 'Rock'){
                playerScore ++;
                return `Player wins: ${playerSelection} beats ${computerSelection}`
    } else{
        computerScore++;
        return `Computer wins: ${computerSelection} beats ${playerSelection}`
    }
    
}



function game(){
    let round = 0;
    
    for(let i = 0; i < 5; i++){
        alert(`Round: ${round}!`);
       
    }
    
}

//game();

//let playerSelection = window.prompt("Choose, Rock, Paper, or Scissors");
let rockToken = document.getElementById("rockToken");
let paperToken = document.getElementById("paperToken");
let scissorToken = document.getElementById("scissorToken");



rockToken.addEventListener("click", () => {
    
    console.log("Rock Clicked")
    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  });

  paperToken.addEventListener("click", () => {
    console.log("Paper Clicked")
    const playerSelection = "Paper";
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  });

  scissorToken.addEventListener("click", () => {
    console.log("Scissors Clicked")
    const playerSelection = "Scissors";
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  });


    
