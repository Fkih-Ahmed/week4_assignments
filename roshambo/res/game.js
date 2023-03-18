let playerScore = 0;
let computerScore = 0;
let restart_btn;
let computer_score;
let player_score;
let text;


// function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // make playerSelection case-insensitive

  // determine winner based on player and computer selections
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  restart_btn = document.getElementById("restart");
  player_score = document.getElementById("P_score");
  computer_score = document.getElementById("C_score");
  text = document.getElementById("text");

  // add click listeners to each of the buttons
  rock.addEventListener("click", function() {
    playSingleRound("rock");
  });

  paper.addEventListener("click", function() {
    playSingleRound("paper");
  });

  scissors.addEventListener("click", function() {
    playSingleRound("scissors");
  });

  // add click listener to the restart button to reset the scores
  restart_btn.addEventListener("click", function() {
    computerScore = 0;
    playerScore = 0;

    player_score.textContent = playerScore;
    computer_score.textContent = computerScore;
    // hide the restart button
    restart_btn.style.display = "none";
  });
});


function playSingleRound(playerSelection) {
  // check if the game has already been won
  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  // get computer's selection
  const computerSelection = computerPlay();
  // play a round of the game
  const result = playRound(playerSelection, computerSelection);

  // update the scores based on the result of the round
  if (result.startsWith('You Win!')) {
    playerScore++;
    player_score.textContent = playerScore;
  } else if (result.startsWith('You Lose!')) {
    computerScore++;
    computer_score.textContent = computerScore;
  }

  // update the game result text
  text.textContent = result;

  // check if either player has reached the winning score of 5
  checkWinner();

  // disable the buttons if the game has been won
  if (playerScore === 5 || computerScore === 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
};


function checkWinner(){
  // if player or computer has won the game, display the result and show the restart button
  if (computerScore == 5){
    text.textContent = "COMPUTER WINS";
    restart_btn.style.display = "flex";
  } 
  else if (playerScore == 5){
    text.textContent = "PLAYER WINS ";
    restart_btn.style.display = "flex";
  }
};