let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
}
*/

updateScoreElement();

function playGame (playerMove) {
const computerMove = pickComputerMove ();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result ='You Lose.';
  } else if (computerMove === 'paper') {
    result ='You Win.';
  } else if (computerMove === 'scissors') {
    result ='Tie.';
  }
  
} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result ='You Win.';
  } else if (computerMove === 'paper') {
    result ='Tie.';
  } else if (computerMove === 'scissors') {
    result ='You  Lose.';
  }

} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result ='Tie.';
  } else if (computerMove === 'paper') {
    result ='You Lose.';
  } else if (computerMove === 'scissors') {               
    result ='You  Win.';
  }
}

if (result === 'You Win.') {
  score.wins += 1;
} else if (result === 'You Lose.') {
  score.losses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You
<img src="Img/${playerMove}-emoji.png" class="move-icon">
<img src="Img/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {

let computerMove = '';

const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}