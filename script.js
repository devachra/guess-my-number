'use strict';
// console.log(document.querySelector('.message').innerHTML);
// document.querySelector('.message').textContent = ' Correct Number!!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
/********************************************+++++++++++++++++++++++////////////-------------------- */

let scoreSL = document.querySelector('.score');
let numberSL = document.querySelector('.number');
let highScoreSL = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess, guess);

  // when there is no input
  if (!guess) {
    displayMessage('No Number');

    // When players wins
  } else if (number === guess) {
    displayMessage('Correct Number!!');
    numberSL.textContent = number;

    // highScore logic
    if (highScore < score) {
      highScore = score;
      highScoreSL.textContent = highScore;
    }

    // Style the web page
    document.querySelector('body').style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = '30rem';

    // When player guess wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Number is too high' : 'number is too low'
      );
      score--;
      scoreSL.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreSL.textContent = 0;
    }
  }
});

// Again button for reset intial condition
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  numberSL.textContent = '?';
  displayMessage('Start guessing...');
  scoreSL.textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  numberSL.style.width = '15rem';
});
