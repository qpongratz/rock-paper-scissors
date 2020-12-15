
//Function to get computer's selection
function computerPlay(){
    rnd = Math.floor(Math.random()*3);
    switch (rnd){
        case 0:
            selection = "Rock";
            break;
        case 1:
            selection = "Paper";
            break;
        case 2: 
            selection = "Scissors";
            break; 
    }
    return (selection);
}

//Compares selections to output a result and modify scores.
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `Tie! You both selected ${playerSelection}.`
    }
    switch (playerSelection){
        case "Rock":
            if (computerSelection === "Paper"){
                result = "You Lose! Paper covers Rock.";
                compScore +=1;
            }else{
                result = "You Win! Rock smashes Scissors."
                playerScore += 1;
            }
            return result
            break;
        case "Paper":
            if (computerSelection === "Scissors"){
                    result = "You Lose! Scissors cut Paper.";
                    compScore +=1;
            }else{
                    result = "You Win! Paper covers Rock."
                    playerScore += 1;
            }
            return result
            break;
        case "Scissors":
            if (computerSelection === "Rock"){
                    result = "You Lose! Rock smashes Scissors.";
                    compScore +=1;
            }else{
                    result = "You Win! Scissors cut Paper."
                    playerScore += 1;
            }
            return result
            break;
    }

}   

//Compares player and computer score to select a final message.
function evaluateEndgame(playerScore, compScore){
    if (playerScore > compScore){
        return("You've won the game! Reload to prove this wasn't a fluke.");
    }else if (compScore > playerScore){
        return("You've lost the game. Reload to salvage your dignity.");
    }else{
        return("You've tied. Reload to achieve catharsis");
    }
}

let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const playerScoreDiv = document.querySelector('#playerScore');
const compScoreDiv = document.querySelector('#compScore');
const resultsDiv = document.querySelector('.results');

updateDisplayedScore();

function updateDisplayedScore() {
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    compScoreDiv.textContent = `Computer's Score: ${compScore}`;
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        resultsDiv.textContent = (playRound(button.id, computerPlay()));
        updateDisplayedScore();
    }); 
});
    


   
