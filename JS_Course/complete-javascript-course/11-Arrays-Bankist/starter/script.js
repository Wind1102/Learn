'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

containerApp.style.opacity = 1;
 

// Credentails


// btnLogin.addEventListener('click', ev => {
//   const userName = inputLoginUsername.textContent;
//   console.log(userName);
// });
// currencies.forEach((value,key, map) => {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// })


// containerApp.style.opacity = 1;

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const eurToUsd = 1.1;

// const usdMovement = movements.map(mov => mov * eurToUsd);

// console.log(usdMovement);
// displayMovements(account1.movements);

// const movementsDescription = movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// console.log(movementsDescription);

const user = 'Steven Thomas Williams';

const computeUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  // let userNames = user.toLowerCase().split(' ').reduce((acc,cur)=> acc + cur[0],"");
  // return userNames;
};

computeUserNames(accounts);
console.log(accounts);

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const balance = movements.reduce((acc,cur) => acc + cur, 0);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

// const maximum_value = movements.reduce((acc, cur) => acc >= cur?acc:cur,movements[0]);
// const maximum_value = Math.max(...movements);

// console.log(maximum_value);

const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// const totalDeposite = function(movements){
//   return movements.filter((mov) => mov > 0).reduce((acc,curr)=> acc+ curr,0);
// }

// console.log(totalDeposite(account1.movements));

const disPlaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  const outcome = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
  const interest = Math.abs((income * acc.interestRate) / 100);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${outcome}€`;
  labelSumInterest.textContent = `${interest}€`;
};

disPlaySummary(account1);

// const x = movements.find(val => {
//   return val > 700;
// });

// console.log(x);

let currentAccount;

const updateUI = function(currentAccount){
    disPlaySummary(currentAccount);
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements);
}


// Display Movements 

const displayMovemetns = function(movements){
  containerMovements.innerHTML = "";
  movements.forEach((mov,i) => {
      let date = new Date();
      const type = mov>0?"deposit":"withdrawal"
      const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1} withdrawal</div>
            <div class="movements__date">${date.toString().slice(8,25)}</div>
            <div class="movements__value">${mov}</div>
          </div>
        `

      containerMovements.insertAdjacentHTML("afterbegin",html);
  });
}

displayMovemetns(account1.movements)


const checkDogs = function(dogsJulia, dogsKate){
  const dogJuliaCorrect = dogsJulia.slice(1,-2);
  const dogKateCorrect = dogsKate.slice();
  return [...dogJuliaCorrect,...dogKateCorrect];
}
const allDogCorrect = checkDogs([3,5,2,12,7],[4,1,15,8,3]);
allDogCorrect.forEach((dog, i) => {
  console.log(`Dog number ${i+1} is ${dog>=3?"an adult":"a puppy"}`);
})

const arr  = [1,2,3,4,5];
const newArr = arr.map((val, i) => val*2)
const filterArr = arr.filter(val => val>1);
const reduceArr = arr.reduce((acc,val) => acc*val,1);
console.log(reduceArr); //120
console.log(filterArr); //[2,3,4,5]
console.log(arr); //[1,2,3,4,5]
console.log(newArr); //[2,4,6,8,10]


btnLogin.addEventListener('click', function (ev) {
  ev.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    updateUI(currentAccount);
    // containerApp.style.opacity = 1;
    console.log(inputLoginUsername.textContent);
    console.log(inputLoginUsername.value);
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

const transferMoney = function (currentAccount, accountTo, amount) {
  const balanceCurAccount = currentAccount.movements.reduce(
    (acc, cur) => acc + cur,
    0
  );
  if (balanceCurAccount >= amount){
    currentAccount.movements.push(-amount);
    accountTo.movements.push(amount);
  }else{
    alert("you don't have enough money to transfer");
  }
};

containerApp.style.opacity = 1;
btnTransfer.addEventListener('click', function (ev) {
  ev.preventDefault();
  const amountTransfer = Number(inputTransferAmount.value);
  const accountTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (accountTo !== currentAccount) {
    transferMoney(currentAccount, accountTo, amountTransfer);
    updateUI(currentAccount);
  } else {
    alert('you can not transfer to you');
  }
});

btnClose.addEventListener('click', function(ev){
  ev.preventDefault();
  if(inputCloseUsername.value === currentAccount.username 
    && Number(inputClosePin.value) === currentAccount.pin
  ){
    const indexAccount = accounts.findIndex((acc)=> acc.username === currentAccount.username)
    accounts.splice(indexAccount,1);
    containerApp.style.opacity = 0;
  }
})

