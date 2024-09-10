'use strict';
// document.querySelector('.message').clicked(function(){
//     let secretNumber = Math.trunc(Math.random() * 20) + 1;
// });
// document.querySelector.

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

let secretNumber;
let highscore = 0;
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.height = '12rem';
});

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number! 🎉';
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
    } else if(guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High!';
    } else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low!';
    }
}) 

