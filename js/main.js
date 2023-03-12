/** Rock Paper Scissor game
 * User enters a choice
 * Computer randomly selects a choice
 * Compare and run 5 times
 * keep track of scores and print results
 */

//scores
let playerScore = 0;
let computerScore = 0;


//get a random number 0-2
//return either rock, paper, scissor
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissor']
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}



//play a round of the user choice vs the computer choice
//compare choices, update scores return winner
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection)
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

//test round

//play 5 rounds of rock paper scissor
//compare results and console the winner
//prompt the user for an answer
//if user enter invalid choice, loop until valid 
//loop 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    let answer = prompt('Rock, Paper, or Scissor?').toLocaleLowerCase();
    while (answer != 'rock' && answer != 'paper' && answer != 'scissor') {
      answer = prompt(`${answer} is not a valid choice. Rock, Paper, or Scissor?`).toLocaleLowerCase();
    }
    console.log(playRound(answer, getComputerChoice()))
  }
  printScores();

}
game();

function printScores() {
  console.log(playerScore, computerScore)
  if (playerScore > computerScore)
    console.log(`Player Wins with ${playerScore} points`)
  else if (computerScore > playerScore)
    console.log(`Computer Wins with ${computerScore} points`)
  else
    console.log(`Draw!`)

}