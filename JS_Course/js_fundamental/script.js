'use strict';
const jonas = {
    firstName: 'Jonas',
    lastName : 'Scheman',
    birthYear: 1991,
    friends : ['Michael','Peter'],
    job : 'Web developer',
    hasDriverLicense: true,
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.age} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
}

// console.log(jonas.calcAge());
// jonas.age = 40;
// console.log(jonas.getSummary());

// for (let i = 0; i <= 10; i++){
//     console.log(`Iteration ${i}: ${i}`);
// }

for (let i =0;i <= 5;i++ ){
    console.log(jonas[i]);
}
