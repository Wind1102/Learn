// 'use strict';

// const newGame = document.querySelector('.btn--new');
// const rollDice = document.querySelector('.btn--roll');
// const hold = document.querySelector('.btn--hold');
// const rollDiceImg = document.querySelector('.dice');
// const player1 = $('.player--0');
// const player2 = $('.player--1');
// const score1 = document.querySelector('#score--0');
// const score2 = document.querySelector('#score--1');
// const current = function(activePlayer,currentScore){
//     return document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
// }
// const score = function(activePlayer,scores){
//     return document.querySelector(`#score--${activePlayer}`).textContent = scores;
// }

// const roll = function(){
//     const dice = Math.trunc(Math.random() * 6 + 1);
//     rollDiceImg.src = `dice-${dice}.png`;
//     return dice;
// }

// const switchPlayer = function(){
//     player1.toggleClass('player--active');
//     player2.toggleClass('player--active');
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     hold.style.backgroundColor = "#312629";
//     hold.disabled = true;
// }

// const currentScore = [0,0];
// const scores=[0,0];
// // let playing;
// let activePlayer = 0;

// rollDice.addEventListener('click', function(){
//     hold.disabled = false;
//     hold.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
//     const dice = roll();
//     if(dice !== 1){
//         currentScore[activePlayer] += dice;
//         current(activePlayer,currentScore[activePlayer]);
        
//     }else{
//         current(activePlayer,0);
//         currentScore[activePlayer] = 0;
//         switchPlayer();
//         hold.style.backgroundColor = "#312629";
//         hold.disabled = true;
//     }
// });

// newGame.addEventListener('click', function(){
//     score1.textContent = 0;
//     score2.textContent = 0;
//     current(0,0);
//     current(1,0);
//     currentScore[0] = 0;
//     currentScore[1] = 0;
//     activePlayer = 0;
// });


// hold.addEventListener('click', function(){
//     scores[activePlayer] += currentScore[activePlayer];
//     score(activePlayer,scores[activePlayer]);
//     currentScore[activePlayer] = 0;
//     switchPlayer();
// });

'use strict';
function MyObject() {
    this.value = 42;
  
    // Traditional function
    this.regularFunction = function() {
      console.log(this.value);  // 'this' refers to the object calling the method
    };
  
    // Arrow function
    this.arrowFunction = () => {
      console.log(this);  // 'this' refers to the surrounding lexical scope (MyObject instance)
    };
  }
  
  const obj = new MyObject();
  
//   // Regular function: 'this' is dynamic and depends on how the function is called
//   obj.regularFunction();  // Output: 42
  
//   // Arrow function: 'this' is lexically bound, refers to the instance of MyObject
//   obj.arrowFunction();  // Output: 42
  
//   const detachedRegular = obj.regularFunction;
//   detachedRegular();  // Output: undefined (because 'this' refers to the global object in non-strict mode)
  const test = () => {
        console.log(this);
  }
  test();
  const detachedArrow = obj.arrowFunction;
  detachedArrow();  // Output: 42 (lexical 'this' remains bound to the original object)
  
//   console.log(obj);