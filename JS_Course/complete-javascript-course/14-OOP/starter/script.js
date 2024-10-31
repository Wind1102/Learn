'use strict';

const Person = function(firstName, birthYear){
    console.log(this);
    this.name = firstName;
    this.birthYear = birthYear;
}   

const jonas = new Person('Jonas', 1991);

// Prototypes

Person.prototype.calcAge = function(){
    return 2024 - this.birthYear;
}

console.log(Person.prototype.constructor)
 
const arr = [1,2,3,4,5,1,1,1,1,2,2,3];

Array.prototype.unique = function(){
    return [... new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.tagName);



// Practice 1

// const car = function(speed){
//     this.speed = speed;
// }

// car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const BMW = new car(120);
// const Mercedes = new car(95);

// BMW.accelerate();
// console.log(BMW.speed);

//class expression
// const PersonCl = class {

// }


//class declaration
class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.test = 1;
    }
    set fullName(name){
        this._fullName = name;
    }

    get fullName(){
        return this._fullName
    }

    calcAge(){
        console.log(2024 - this.birthYear);
    }

    static sayHi(){
        console.log("hi");
    }
}

const MH = new PersonCl('Minh Hieu', 2002);
console.log(MH.sayHi);
console.log(PersonCl.sayHi());


const PersonProto = {
    name: "MHieu",
    calcAge: function(){
    return 5;
    }
}

const steven = Object.create(PersonProto);
steven.birthYear = 2002;
console.log(steven.__proto__);

console.log(PersonProto.name)



// Practice 2

class car {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed+= 10;
    }
    brake(){
        this.speed -= 5;
    }
    get speedUS(){
        return this.speed/1.6
    }

    set speedUS(speed){
  
        this.speed = speed*1.6;
    }
}


// const ford = new car(50);
// // console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford.speed);


const student = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

student.prototype.calcAge1 = function(){
    return 2025 - this.birthYear;
}


student.prototype = Object.create(Person.prototype)


console.log(student.prototype);
const x = new student("hieu",2002);
console.log(x.calcAge());


const EV = function(make,speed,charge){
    car.call(this,make,speed);
    this.charge = charge;
}


class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }
}

const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);



// jay.testObject()


class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
  
    // 2) Private fields (instances)
    #movements = [];
    #pin;
  
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
  
      // Protected property
      // this._movements = [];
      // this.locale = navigator.language;
  
      console.log(`Thanks for opening an account, ${owner}`);
    }
  
    // 3) Public methods
  
    // Public interface
    getMovements() {
      return this.#movements;
    }
  
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
  
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
  
    requestLoan(val) {
      // if (this.#approveLoan(val)) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        return this;
      }
    }
}


// console.log(Account.#movements);