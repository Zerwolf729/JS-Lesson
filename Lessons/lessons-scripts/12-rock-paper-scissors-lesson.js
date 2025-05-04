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

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Stop Playing...';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.js-auto-play-button')
      .innerHTML = 'Auto Play';
  }
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    showResetConfirmation();
  }
});

document.querySelector('.reset-score-button')
  .addEventListener('click', () => {
    showResetConfirmation();
  });

document.querySelector('.auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
      <button class="js-reset-confirm-no reset-confirm-button">No</button>
    `;

  document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });

  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You Lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else {
      result = 'You Win.';
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

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
    <img src="../img/${playerMove}-emoji.png" class="move-icon">
    <img src="../img/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}
