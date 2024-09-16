'use strict';

var name = 'Minh Hieu';
// const object = {
//     name: 'John',
//     age: 26,
//     info: function() {
//         console.log(this);
 
//         const arrowfunc = () => {
//             console.log(this);
//         }
//         arrowfunc();
//     },
//     testa: () => {
//         console.log(this);
//     } 

// }

// // object.info(); // {name: "John", age: 26, info: ƒ}

// // const objinfor = object.info;
// // objinfor(); // undefined
// object.info(); // Joh
// object.testa()


const attribute = 'name';

const MH = {
    [attribute]: 'Minh Hieu',
    age: 26,
}

console.log(MH.name); // {name: "Minh Hieu", nameage: 26}

const Hieu = MH.copy();
Hieu.name = 'Hieu';

console.log(MH);
