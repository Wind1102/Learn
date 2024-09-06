// function calcAge1(birthYear){
//     return 2024 - birthYear;
//   } 

// // const age1 = calcAge1(1991);
// // const calcAge2 = function(birthYear){
// //     console.log(2024 - birthYear);
// //     return 2024 - birthYear;
// // }
// // const age2 = calcAge2(1993);
// // console.log(age2);

// // function cutFruitPieces(fruit){
// //     return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges){
// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }


// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = years.map(calcAge1);

// console.log(ages);
// years.push("5");
// years.unshift("5");
// console.log(years);

/* Write your code below. Good luck! 🙂 */

function calcTip(bill){
    return bill > 50 && bill < 300 ? bill * 0.15:bill * 0.2;
}
const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]; 

console.log(totals);