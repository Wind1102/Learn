// // // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section

// // // // const books = [
// // // //   {
// // // //     title: 'Algorithms',
// // // //     author: ['Robert Sedgewick', 'Kevin Wayne'],
// // // //     publisher: 'Addison-Wesley Professional',
// // // //     publicationDate: '2011-03-24',
// // // //     edition: 4,
// // // //     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
// // // //     pages: 976,
// // // //     format: 'hardcover',
// // // //     ISBN: '9780321573513',
// // // //     language: 'English',
// // // //     programmingLanguage: 'Java',
// // // //     onlineContent: true,
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.41,
// // // //         ratingsCount: 1733,
// // // //         reviewsCount: 63,
// // // //         fiveStarRatingCount: 976,
// // // //         oneStarRatingCount: 13
// // // //       }
// // // //     },
// // // //     highlighted: true
// // // //   },
// // // //   {
// // // //     title: 'Structure and Interpretation of Computer Programs',
// // // //     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
// // // //     publisher: 'The MIT Press',
// // // //     publicationDate: '2022-04-12',
// // // //     edition: 2,
// // // //     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
// // // //     pages: 640,
// // // //     format: 'paperback',
// // // //     ISBN: '9780262543231',
// // // //     language: 'English',
// // // //     programmingLanguage: 'JavaScript',
// // // //     onlineContent: false,
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.36,
// // // //         ratingsCount: 14,
// // // //         reviewsCount: 3,
// // // //         fiveStarRatingCount: 8,
// // // //         oneStarRatingCount: 0
// // // //       }
// // // //     },
// // // //     highlighted: true
// // // //   },
// // // //   {
// // // //     title: 'Computer Systems: A Programmer\'s Perspective',
// // // //     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
// // // //     publisher: 'Prentice Hall',
// // // //     publicationDate: '2002-01-01',
// // // //     edition: 1,
// // // //     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
// // // //     pages: 978,
// // // //     format: 'hardcover',
// // // //     ISBN: '9780130340740',
// // // //     language: 'English',
// // // //     programmingLanguage: 'C',
// // // //     onlineContent: false,
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.44,
// // // //         ratingsCount: 1010,
// // // //         reviewsCount: 57,
// // // //         fiveStarRatingCount: 638,
// // // //         oneStarRatingCount: 16
// // // //       }
// // // //     },
// // // //     highlighted: true
// // // //   },
// // // //   {
// // // //     title: 'Operating System Concepts',
// // // //     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
// // // //     publisher: 'John Wiley & Sons',
// // // //     publicationDate: '2004-12-14',
// // // //     edition: 10,
// // // //     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
// // // //     pages: 921,
// // // //     format: 'hardcover',
// // // //     ISBN: '9780471694663',
// // // //     language: 'English',
// // // //     programmingLanguage: 'C, Java',
// // // //     onlineContent: false,
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 3.9,
// // // //         ratingsCount: 2131,
// // // //         reviewsCount: 114,
// // // //         fiveStarRatingCount: 728,
// // // //         oneStarRatingCount: 65
// // // //       }
// // // //     }
// // // //   },
// // // //   {
// // // //     title: 'Engineering Mathematics',
// // // //     author: ['K.A. Stroud', 'Dexter J. Booth'],
// // // //     publisher: 'Palgrave',
// // // //     publicationDate: '2007-01-01',
// // // //     edition: 14,
// // // //     keywords: ['mathematics', 'engineering'],
// // // //     pages: 1288,
// // // //     format: 'paperback',
// // // //     ISBN: '9781403942463',
// // // //     language: 'English',
// // // //     programmingLanguage: null,
// // // //     onlineContent: true,
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.35,
// // // //         ratingsCount: 370,
// // // //         reviewsCount: 18,
// // // //         fiveStarRatingCount: 211,
// // // //         oneStarRatingCount: 6
// // // //       }
// // // //     },
// // // //     highlighted: true
// // // //   },
// // // //   {
// // // //     title: 'The Personal MBA: Master the Art of Business',
// // // //     author: 'Josh Kaufman',
// // // //     publisher: 'Portfolio',
// // // //     publicationDate: '2010-12-30',
// // // //     keywords: ['business'],
// // // //     pages: 416,
// // // //     format: 'hardcover',
// // // //     ISBN: '9781591843528',
// // // //     language: 'English',
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.11,
// // // //         ratingsCount: 40119,
// // // //         reviewsCount: 1351,
// // // //         fiveStarRatingCount: 18033,
// // // //         oneStarRatingCount: 1090
// // // //       }
// // // //     }
// // // //   },
// // // //   {
// // // //     title: 'Crafting Interpreters',
// // // //     author: 'Robert Nystrom',
// // // //     publisher: 'Genever Benning',
// // // //     publicationDate: '2021-07-28',
// // // //     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
// // // //     pages: 865,
// // // //     format: 'paperback',
// // // //     ISBN: '9780990582939',
// // // //     language: 'English',
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.7,
// // // //         ratingsCount: 253,
// // // //         reviewsCount: 23,
// // // //         fiveStarRatingCount: 193,
// // // //         oneStarRatingCount: 0
// // // //       }
// // // //     }
// // // //   },
// // // //   {
// // // //     title: 'Deep Work: Rules for Focused Success in a Distracted World',
// // // //     author: 'Cal Newport',
// // // //     publisher: 'Grand Central Publishing',
// // // //     publicationDate: '2016-01-05',
// // // //     edition: 1,
// // // //     keywords: ['work', 'focus', 'personal development', 'business'],
// // // //     pages: 296,
// // // //     format: 'hardcover',
// // // //     ISBN: '9781455586691',
// // // //     language: 'English',
// // // //     thirdParty: {
// // // //       goodreads: {
// // // //         rating: 4.19,
// // // //         ratingsCount: 144584,
// // // //         reviewsCount: 11598,
// // // //         fiveStarRatingCount: 63405,
// // // //         oneStarRatingCount: 1808
// // // //       }
// // // //     },
// // // //     highlighted: true
// // // //   }
// // // // ];

// // // // //1.1
// // // // const [firstBook, secondBook] = books;
// // // // console.log(firstBook, secondBook);

// // // // //1.2
// // // // const [ , , thirdBook] = books;
// // // // console.log(thirdBook);

// // // // //1.3

// // // // const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// // // // const [[,rating], [,ratingsCount]] = ratings;
// // // // console.log(rating, ratingsCount);

// // // // //1.4
// // // // const ratingStars = [63405, 1808];
// // // // const [fiveStarRatings, oneStarRating,threeStarRatings] = [...ratingStars,0];
// // // // console.log(fiveStarRatings, oneStarRating,threeStarRatings);

// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   order : function (strartIndex , mainIndex){
// //     return [this.starterMenu[strartIndex], this.mainMenu[mainIndex]];
// //   },
// //   orderDelivery: function ({startIndex, time, address}) {
// //     console.log(startIndex, time, address);
// //     console.log(this);
// //     console.log(`Order received! ${this.starterMenu[startIndex]}  will be delivered to ${address} at ${time}`);
// //   },

// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // // const orderObj = {
// // //   startIndex: 2,
// // //   mainIndex: 2,
// // //   time: '22:30',
// // //   address: 'Via del Sole, 21'
// // // };

// // // restaurant.orderDelivery(orderObj);

// // // // const {name , mainMenu, location} = restaurant;
// // // // console.log(name, mainMenu, location);

// // // // const {name: restaurantName, mainMenu: menu, location: loc} = restaurant;
// // // // console.log(restaurantName, menu, loc);

// // // // const obj = {
// // // //   a: 1,
// // // //   b: 2,
// // // //   c: 3
// // // // };
// // // // let a  =111;
// // // // let b = 999;
// // // // ({a,b} = obj);
// // // // console.log(a,b);

// // // // const {openingHours} = restaurant;
// // // // const {fri: {open, close} } = openingHours;
// // // // console.log(open, close);

// // // const myName = "Minh Hieu";
// // // const letter = [...myName];
// // // const lt = [];
// // // for (i in myName){
// // //   lt.push(i);

// // // }
// // // console.log(letter);
// // // console.log(lt);

// // // const str = "minh Hieu";
// // //   const letter = [...str]; //['m','i','n','h',' ','H', 'i','e','u'];
// // //   const restaurant = {
// // //     name: 'Pizza',
// // //     location: "dong da",

// // //   }
// // //   const HieuPizza = {...restaurant, prize: '51'}
// // //   console.log(HieuPizza);
// // //   console.log(restaurant);

// // // const arr = [1,2,3,4,5];
// // // const [a,b,...others] = arr;
// // // console.log(others);

// // // 'use strict';

// // // let getNumber = undefined;
// // // let guess = getNumber ?? 10;
// // // console.log(guess);
// // // const obj = null;
// // // // const obj = {
// // // //     // a: 1,
// // // //     b: 2,
// // // //     c: 3,
// // // // };
// // // const test = obj?.a;
// // // console.log(test);

// // // const rest1 = {
// // //     name: 'Classico Italiano',
// // //     numGuests : 56,
// // // };
// // // const rest2 = {
// // //     name: 'MH',
// // //     owner: "Hieu",
// // //     numGuests : 20,
// // // };

// // // Object.assign(rest1, rest2.owner);
// // // console.log(rest1);
// // // console.log(rest2);

// // const game = {
// //     team1: 'Bayern Munich',
// //     team2: 'Borrussia Dortmund',
// //     players: [
// //       [
// //         'Neuer',
// //         'Pavard',
// //         'Martinez',
// //         'Alaba',
// //         'Davies',
// //         'Kimmich',
// //         'Goretzka',
// //         'Coman',
// //         'Muller',
// //         'Gnarby',
// //         'Lewandowski',
// //       ],
// //       [
// //         'Burki',
// //         'Schulz',
// //         'Hummels',
// //         'Akanji',
// //         'Hakimi',
// //         'Weigl',
// //         'Witsel',
// //         'Hazard',
// //         'Brandt',
// //         'Sancho',
// //         'Gotze',
// //       ],
// //     ],
// //     score: '4:0',
// //     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //     date: 'Nov 9th, 2037',
// //     odds: {
// //       team1: 1.33,
// //       x: 3.25,
// //       team2: 6.5,
// //     },
// //     printGoals: function (...players){
// //       // const allPlayer = [...this.players[0], ...this.players[1]]
// //       for (let i =0; i<players.length;i++){
// //         const goal = this.scored.filter(player => player === players[i]).length;
// //         console.log(`${players[i]}:${goal}`);
// //       }
// //     }
// //   };

// // // //1
// // // const [players1, players2] = game.players;
// // // console.log(players1, players2);

// // // //2
// // // const [gk,...fieldPlayers] = players1;
// // // console.log(gk, fieldPlayers);

// // // //3
// // // const allPlayer = [...players1, ...players2];
// // // console.log(allPlayer);

// // // //4
// // // players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // // console.log(players1Final);

// // // //5
// // // const {team1,x: draw,team2} = game.odds;
// // // console.log(team1, draw, team2);

// // //6
// // game.printGoals('Davies', 'Muller', 'Lewandowski', 'Gnarby');

// // //7

// // const {team1, team2} = game.odds;
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order : function (strartIndex , mainIndex){
//     return [this.starterMenu[strartIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({startIndex, time, address}) {
//     console.log(startIndex, time, address);
//     console.log(this);
//     console.log(`Order received! ${this.starterMenu[startIndex]}  will be delivered to ${address} at ${time}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu){
// //   console.log(item);
// // }

// // for(const item of menu.entries()){
// //   console.log(item);
// // }

// // const a = [1,2,3,4,5,6,7,8,9];
// // console.log(a[10]?.toExponential(2) ?? 'No such element');

// const {openingHours} = restaurant;
// // for(const day of Object.entries(openingHours)){
// //   console.log(day);
// // }

// console.log(Object.entries(openingHours));

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//     printGoals: function (...players){
//       // const allPlayer = [...this.players[0], ...this.players[1]]
//       for (let i =0; i<players.length;i++){
//         const goal = this.scored.filter(player => player === players[i]).length;
//         console.log(`${players[i]}:${goal}`);
//       }
//     }
//   };

// for(const player of game.scored){
//   const goal = game.scored.filter(p => p === player).length;
//   console.log(`Goal ${goal}: ${player}`);
// }

// function calAverage({team1, x:draw, team2}){
//   // console.log(team1, draw, team2);
//   return (team1 + draw + team2) / 3;
// }

// console.log(calAverage(game.odds));

// for(const [team,odd] of Object.entries(game.odds)){

//   console.log(`Odd of victory ${game[team]?? 'draw'}: ${odd}`);

// }

// const scorers = {};
// for(const player of game.scored){
//   scorers[player] = (scorers[player]?? 0) + 1;
// }
// console.log(scorers);

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// // console.log(orderSet);
// const orderSet1 = new Set(...orderSet);
// console.log(orderSet1);
// console.log(...orderSet);

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
const orderSet1 = new Set([...orderSet]); // Spread inside an array

// console.log(orderSet1); // Outputs: Set { 'Pasta', 'Pizza', 'Risotto' }
// console.log(orderSet.size);

// const a = [1, 2, 3, 4];
// const b = a.unshift(1);
// console.log(b);
// console.log(a);

// const c = new Set ([1,2,3,4]);
// const d = [...c];
// console.log(d);
// console.log(c);
// console.log(c[1]);


// const rest = new Map();
//   rest.set('name', "MH");
//   rest.set(1,"Haha");
// console.log(rest);
// console.log(rest.set(2, "Hieu"));
// console.log(rest.get(1));

// const arr = [1,2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));
// console.log(rest);

// console.log(orderSet);
// console.log(orderSet.has('Pizza'));

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
  
// ]);
// const differentEvent =[...new Set([...gameEvents.values()])];
// console.log(differentEvent);

// gameEvents.delete(64);
// console.log(gameEvents);


// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(gameEvents);

// const numEvents = [...gameEvents.keys()].filter(k => k<=90);
// const average = 90/numEvents.length;
// console.log(average);
// console.log(numEvents);
// console.log(gameEvents.entries());


// for(const [min,events] of gameEvents.entries()){
//   console.log(min<45? `[FIRST HALF] ${min}: ${events}` : `[SECOND HALF] ${min}: ${events}`);
// }


const airLine = "        Tap Air Portugal    "
const plane = "A320";
console.log(plane[0]);
console.log(airLine.slice(4,8));
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.substring(10,16));
console.log(airLine.includes('Portugal'));

console.log(airLine.slice(0));
const mH = new String("Test")
console.log(mH);
console.log(airLine.trim());
