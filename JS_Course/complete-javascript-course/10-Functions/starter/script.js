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


const obj = {
    name: 'My Object',
    getName: () => {
      const regularFunc = () => {
        console.log(this); // 'this' ở đây là 'obj'
        console.log(this.name); 
      };
      regularFunc(); // Trong trường hợp này, 'this' không còn là 'obj'
    }
  };
  obj.getName(); // Kết quả: undefined (trong strict mode)
  