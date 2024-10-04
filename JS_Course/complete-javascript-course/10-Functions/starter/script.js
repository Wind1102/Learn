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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);