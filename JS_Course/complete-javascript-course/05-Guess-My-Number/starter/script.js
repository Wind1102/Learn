'use strict';
// document.querySelector('.message').clicked(function(){
//     let secretNumber = Math.trunc(Math.random() * 20) + 1;
// });
// document.querySelector.

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

let secretNumber;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.height = '12rem';
});

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    let score = guess/secretNumber;
    console.log(score);
    if(score === 1){
        displayMessage('Correct Number! 🎉');
        if (secretNumber > highscore){
            highscore = secretNumber;
            document.querySelector('.highscore').textContent = highscore;
        }
    document.querySelector('.number').textContent = secretNumber;    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.height = '30rem';
    document.querySelector('.number').style.fontSize = '15rem';
    document.querySelector('.number').style.textAlign = 'center';
    }
    else if (score === 0){
        displayMessage('No Number!');
    }
    else {
        let message = score < 1 ? 'Too Low!' : 'Too High!';
        displayMessage(message);
    } 
}) 

