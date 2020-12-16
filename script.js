
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
let round = 0;

const buttons = document.querySelectorAll('button');
const playerScoreDiv = document.querySelector('#playerScore');
const compScoreDiv = document.querySelector('#compScore');
const resultsDiv = document.querySelector('.results');
const endgame = document.querySelector('.endgame');
const rounds = document.querySelector('.rounds');

updateDisplayedScore();

function updateDisplayedScore() {
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    compScoreDiv.textContent = `Computer's Score: ${compScore}`;
}

function evaluateEndgame(){
    if (playerScore >= 5){
        endgame.textContent = "Good show, good show. You've bested the robot and proven yourself.";
    }else if (compScore >= 5){
        endgame.textContent = "Oooh, too bad. Though for just a dime you can have another go."
    }else{
        return;
    }
}

function updateRoundHistory(playerChoice, compChoice){
    let newRound = document.createElement('li');
    newRound.style.listStyle = 'none';
    newRound.textContent = `Round ${round}: ${playerChoice} vs. ${compChoice}`;
    rounds.insertBefore(newRound, rounds.firstChild);
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && compScore < 5) {
            computersChoice = computerPlay();
            resultsDiv.textContent = (playRound(button.id, computersChoice));
            updateDisplayedScore();
            evaluateEndgame();
            round++
            updateRoundHistory(button.id, computersChoice);
        }        
    }); 
});
    


   
