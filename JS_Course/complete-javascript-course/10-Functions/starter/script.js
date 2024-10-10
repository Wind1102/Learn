// 'use strict';
// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24739479284
// }


// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
// }


// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const counter = {
//     value: 23,
//     inc: function () {
//         this.value++;
//         console.log(this.value);
//     },
//     add: () => {
//         // this.value++;
//         console.log(this.value);
//         console.log(this);
//     },
//     test: function(){
//         this.add();
//     }
// }

// counter.inc();
// // counter.add();
// counter.test();


// const obj = {
//     name: 'My Object',
//     getName: () => {
//       const regularFunc = () => {
//         console.log(this); // 'this' ở đây là 'obj'
//         console.log(this.name); 
//       };
//       regularFunc(); // Trong trường hợp này, 'this' không còn là 'obj'
//     }
//   };
//   obj.getName(); // Kết quả: undefined (trong strict mode)
  
// function count(){
//   let count = 0;
//   return function(){
//     count++;
//     console.log(count);
//   }
// }

// const count_number = count();
// count_number();

// const oneWord = function(str){
//   return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }


// const transformer = function(str, fn){
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);


// const  greet = (greeting) => {
//   return (name)=> {
//     console.log(`${greeting} ${name}`);
//   }
// }

// greet("Hello")("Hieu");

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);


// console.log(...eurowings);


// const arr = [1,2,3];
// const b_Arr = arr.push.apply(arr, [4,5,6]);
// console.log(arr);
// console.log(b_Arr);


// arr.push.call(arr, [7,8,9]);
// console.log(arr);
// arr.push(10,11,12);
// console.log(arr);

// class Base {
//   constructor(...args) {
//     console.log(new.target === Base);
//     console.log(args);
//   }
  
//   abc () {
//       console.log("test");
//   }
// }

// // const BoundBase = Base.bind(null, 1, 2);

// x = new Base(3, 4); // true, [1, 2, 3, 4]




// class LateBloomer {
//   constructor() {
//     this.petalCount = Math.floor(Math.random() * 12) + 1;
//   }
//   bloom() {
//     // Declare bloom after a delay of 1 second
//     // setTimeout(this.declare.bind(this), 1000);
//     setTimeout(
//       this.declare
//     , 1000);
//   }
//   declare() {
//     console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
//   }
// }

// const flower = new LateBloomer();
// flower.bloom();
// After 1 second, calls 'flower.declare()'


// class Base {
//   static baseProp = "base";
  
// }

// class Derived extends Base {
//   derivedProp = "derived";
//   x(){
//     console.log("test");
//   }
// }

// // const BoundDerived = Derived.bind(Base);
// // console.log(typeof BoundDerived);
// // const m = new BoundDerived();
// // console.log(m.x());


// // const x = function(){
// //   y = 10;
// //   this.haha = "abcd";
// // }

// // const k = new x();
// // console.log(k.haha);

// const y = new Derived();
// y.x();
// class d3 extends Derived{
//   x(){
//     console.log("test2");
//   }
// }
// console.log(d3.prototype);


// class Base {
//   static baseProp = "base";
//   constructor(name) {
//       this.name = name;
//   }
// }

// //   greet() {
// //       console.log(`Hello, my name is ${this.name}`);
// //   }
// // }

// class Derived extends Base {
//   constructor(name, age) {
//       super(name); // Call the constructor of the base class
//       this.age = age;
//   }

//   info() {
//       console.log(`I am ${this.age} years old.`);
//   }
// }


// // const BoundDerived = Derived.bind(null, 'John');

// // const instance = new Derived(25); // 'John' is bound as the first argument
// // instance.greet(); // Outputs: Hello, my name is John
// // instance.info();  // Outputs: I am 25 years old.


// console.log(Base.prototype);
// console.log(Derived.prototype);



// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// ///////////////////////////////////////
// // The bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// console.log(eurowings);



const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function (){
    const answer = prompt(`${this.question}]\n ${this.options.join('\n')}`);
    if(Number(answer)){
      if (Number(answer) >= 0 && Number(answer) <= 3){
        this.answers[Number(answer)]++;
      }
    }
    this.displayResults();
  },
  displayResults: function (){
    const type = prompt('which displays the poll results.');
    if (type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
    else if (type === 'array'){
      console.log(this.answers);
    }
  },
};

const buttonAnswerPoll = document.querySelector('.poll');
buttonAnswerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));


