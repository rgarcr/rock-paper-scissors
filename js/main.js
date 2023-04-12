/** Rock Paper Scissor game
 * User enters a choice
 * Computer randomly selects a choice
 * keep track of scores and print results
 */

//scores
let round = 0;
let playerScore = 0;
let computerScore = 0;
let result = document.querySelector(".result");
document.querySelectorAll('.selection').forEach(node => node.addEventListener('click', payGame));

function payGame(e){
  if (round < 5)
    result.textContent = playRound(e.target.innerText.toLowerCase(), getComputerChoice());
  else
    result.textContent = printScores();
}

//get a random number 0-2
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissor']
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}



//play a round of the user choice vs the computer choice
//compare choices, update scores return winner
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection, round)
  round++;

  if (playerSelection === computerSelection)
    return `Draw ${playerSelection} === ${computerSelection}`

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerScore++;
      return 'Computer won'
    }
    else {
      playerScore++;
      return 'Player won'
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissor') {
      computerScore++;
      return 'Computer won'
    }
    else {
      playerScore++;
      return 'Player won'
    }
  }
  if (playerSelection === 'scissor') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'Computer won'
    }
    else {
      playerScore++;
      return 'Player won'
    }

  }

}

function printScores() {
  console.log(playerScore, computerScore)
  if (playerScore > computerScore)
    return (`Player Wins with ${playerScore} points`)
  else if (computerScore > playerScore)
    return (`Computer Wins with ${computerScore} points`)
  else
    return (`Draw! Nobody wins!`)

}