
//Function to get computer's selection
function computerPlay(){
    rnd = Math.floor(Math.random()*3);
    switch (rnd){
        case 0:
            selection = "Quartz";
            break;
        case 1:
            selection = "Parchment";
            break;
        case 2: 
            selection = "Shears";
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
        case "Quartz":
            if (computerSelection === "Parchment"){
                result = "You Lose! Parchment covers Quartz.";
                compScore +=1;
            }else{
                result = "You Win! Quartz smashes Shears."
                playerScore += 1;
            }
            return result
            break;
        case "Parchment":
            if (computerSelection === "Shears"){
                result = "You Lose! Shears cut Parchment.";
                compScore +=1;
            }else{
                result = "You Win! Parchment covers Quartz."
                playerScore += 1;
            }
            return result
            break;
        case "Shears":
            if (computerSelection === "Quartz"){
                result = "You Lose! Quartz smashes Shears.";
                compScore +=1;
            }else{
                result = "You Win! Shears cut Parchment."
                playerScore += 1;
            }
            return result
            break;
    }

}   



let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const playerScoreDiv = document.querySelector('#playerScore');
const compScoreDiv = document.querySelector('#compScore');
const resultsDiv = document.querySelector('.results');
const endgame = document.querySelector('.endgame');

updateDisplayedScore();

function updateDisplayedScore() {
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    compScoreDiv.textContent = `Computer's Score: ${compScore}`;
}

function evaluateEndgame(){
    if (playerScore >= 5){
        endgame.textContent = "You've won the game! Reload to prove this wasn't a fluke.";
    }else if (compScore >= 5){
        endgame.textContent = "You've lost the game. Reload to salvage your dignity."
    }else{
        return;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && compScore < 5) {
            resultsDiv.textContent = (playRound(button.id, computerPlay()));
            updateDisplayedScore();
            evaluateEndgame();
        }        
    }); 
});
    


   
