'use strict';

// console.log(document.querySelector('.message').textContent); //Display = Guess number
// document.querySelector('.message').textContent = 'Correct Number👍🏽'
// console.log(document.querySelector('.message').textContent); //display = correct number

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//THESE ARE MY NOTES: The addEventListener method is determined when an action is required on a page, such ass clicking or moving the mouse.
// A function is just a value
// therefore you can pass on a function as an arguement
// .value method is creating the guess class into a value created by JS.
//random method will give you a random number from 0-1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage(' No number!🤡 ');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('You got the correct number! 👍🏽');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //here we used a ternary operator
      displayMessage(guess > secretNumber ? 'Too High! 🤷‍♀️' : 'Too Low 🥶');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER 😵‍💫');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//     // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too High! 🤷‍♀️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER 😶‍🌫️';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Keep guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});


