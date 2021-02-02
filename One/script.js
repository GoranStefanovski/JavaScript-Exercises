'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {

  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24h
    close: 24,
  }
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,


  //

  order(starterIndex, mainIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex]
    ]
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    addres
  }) {
    console.log(`Order Recived: ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]}, will be delivered at ${addres}
    at ${time}hr.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delisious pasta with ${ing1}, 
    ${ing2} and ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};


//////////////////////////////////////////////
// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.toLowerCase().trim().split('\n')
  console.log(rows);
  for (const row of rows) {
    row.replace('_', ' ');
  }
})
// I need to make them in lowercase
// Replace (_) with epty place
// make them join



////////////////////////////////////////////////
// Working with strings 
// Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320'

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));


// // Example 

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1)
//   if (s === 'B' || s === 'C') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got the window seat');
//   }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// console.log(new String('Goran'));
// console.log(typeof new String('Goran'));

// console.log(new String('Goran').slice(1));
// console.log(typeof new String('Goran').slice(1));


// Part 2

// const airline = 'TAP Air Portugal';
// const plane = 'A320'

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // Fix capitalization in name
// const passenger = 'gOraN'; //Goran
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);

// // Compare emails of user
// const email = 'tevidma@gmail.com';
// const loginEmail = '  Tevidma@gmail.com \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(loginEmail);
// console.log(trimmedEmail);

// const normEmail = loginEmail.toLowerCase().trim();
// console.log(normEmail);


// // Replacing
// const priceGB = ' ';
// const priceUS = priceGB.replace('£', '$').replace(',', '.')
// console.log(priceUS);

// const ann = 'All passenger come to door 23';

// console.log(ann.replace('door', 'gate'));

// // Practice Exercise
// const checkBaggage = function (item) {
// const baggage = item.toLowerCase();
// if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// }

// checkBaggage('I have a laptop,some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// Part 3

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Goran Stefanovski'.split(' '));

// const [firstName, lastName] = 'Goran Stefanovski'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = []

//   for (const n of names) {
//     nameUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(nameUpper.join(' '));
// }

// capitalizeName('goran stefanovski')
// capitalizeName('anastasija ane poposka i nezz sho')


// // Padding

// const message = 'Go to gate 23';
// const name = 'Goran'
// // Everything in console is 25 length
// console.log(message.padStart(25, '+').padEnd(50, '+'));
// console.log(name.padStart(24, '+').padEnd(50, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')

// }

// console.log(maskCreditCard(75364159));
// console.log(maskCreditCard(321654788951235));
// console.log(maskCreditCard('123125135347643568579678067857645'));


// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(4));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'PLANE '.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/////////////////////////////////////////////////
// Coding Challenge #3 

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// // 1)
// const events = [...new Set(gameEvents.values())]

// console.log(events);

// // 2)
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3)
// console.log(`An event happened, on average every ${90 / gameEvents.size} minutes`);

// // 4)
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`FIRST HALF: ${key}: ${value}`);
//   } else {
//     console.log(`SECOND HALF: ${key}, ${value}`);
//   }
// }

//////////////////////////////////////////////////
// Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programing language in the world?'],
//   [1, 'C#'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Wrong']
// ])

// console.log(question.get('question'));
// for (const [key, item] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${item}`);
//   }
// }

// let answer = 3;
// console.log(answer);

// // if (answer === 3) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// console.log(question.get(question.get('correct') === answer));

// console.log([...question]);
// console.log('Entries -------------');
// console.log(question.entries());
// console.log('Values --------------');
// console.log(question.values());
// console.log('Keys ----------------');
// console.log(question.keys());


///////////////////////////////////////////////////
// Maps: Fundimentals

// const rest = new Map();
// rest.set('name', 'Goran')
//   .set(1, 'Bitola, Macedonia')
//   .set(2, 'Skopje, Macedonia')
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('open'));
// rest.delete(2);
// console.log(rest.get(2));
// // rest.clear()
// rest.set([1, 2], 'Test')
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

///////////////////////////////////////////////////
// Sets

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);

// console.log(ordersSet);
// console.log(new Set('Ghandi'));
// console.log(ordersSet.size);
// // Like Includes
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// // add to set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Pizza');
// ordersSet.clear()
// console.log(ordersSet);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Menager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];  //This makes it as array
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Menager', 'Chef', 'Waiter']).size);
// console.log(staffUnique.size);
///////////////////////////////////////////////////
// Coding Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.

// for (const [score, player] of game.scored.entries()) {
//   console.log(`Goal ${score + 1}: ${player}  `);
// }

// // 2.
// const odds = Object.values(game.odds)
// let averge = 0;
// for (const odd of odds)
//   averge += odd;
// averge /= odds.length;
// console.log(averge);

// // 3.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// 4.
const scorers = {

}
///////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `
// for (const day of properties) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// // Property Values

// const values = Object.values(openingHours);
// console.log(values);



////////////////////////////////////////////////////
// Optional Chaning (?)

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method Does Not Exist');
// console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method Does Not Exist'); //This does not exist


// // Arrays
// const users = [
//   { name: 'Jonas', email: 'tevidma@gmail.com' }
// ];

// console.log(users[0]?.name ?? 'User Does Not Exist');
// console.log(users[0]?.email ?? 'Email Does Not Exist');

// // With No Array

// console.log(users[1]?.name ?? 'User Does Not Exist');
// console.log(users[1]?.email ?? 'Email Does Not Exist');

////////////////////////////////////////////////////
// Looping Arrays - The for-of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) {
//   console.log(item);
// }

// // Looping with index
// for (const [z, el] of menu.entries()) {
//   console.log(`${z + 1}: ${el}`);
// }


//////////////////////////////////////////////////////
// Coding Challenge #1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // My solution
// Try One

// 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.\
// console.log('--------Bayers GoalKeeper And Field Players-----------');
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// console.log('------------All Players----------');
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const plyers1Final = [...players1, 'Goran', 'Ane', 'Ovaj'];
// console.log(plyers1Final);

// // 5.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (players) {
//   console.log(`The match finished ${players.length} goals for Munich`);
// }

// printGoals(game.scored);

// // 7.

// team1 < team2 && console.log('Team one has a bigger chance of winning');
// team2 < team1 && console.log('Team two has a bigger chance of winning');




//////////////////////////////////////////////////////
// The Nullish coalescing operator (??)

// const guestTwo = restaurant.numGuests || 10;
// console.log(guestTwo);

// // It takes nulls as values it doesnt make them
// //   as falsy values
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////////////////////
// Short Circuting (&& and  ||)

// console.log('---- OR ----');

// console.log(3 || 'Jonas');
// console.log('' || true);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guestOne = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guestOne);

// const guestTwo = restaurant.numGuests || 10;
// console.log(guestTwo);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(true || 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('moshrooms', 'spanich')
// }

// restaurant.orderPizza && restaurant.orderPizza('moshrooms', 'spanich');
// restaurant.orderPasta && restaurant.orderPasta('kur', 'betch', 'picka')


///////////////////////////////////////////////////////
// Rest Pattern And Parameters

// 1) Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST, becayse on LEFT side of =
// const [a, b, ...durgi] = [1, 2, 3, 4, 5];
// console.log(a, b, ...durgi);

// const [i, , j, ...o] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(i, j, o);

// const { sat, ...others } = restaurant.openingHours;
// console.log(others);

// 2) Functions

// const add = function (...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) sum += num[i];
//   console.log(sum);
// }

// add(2, 5, 9)

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('moshrooms', 'onion', 'olives', 'spanich')
// restaurant.orderPizza('moshrooms');
// console.log(add(2, 5, 9));
////////////////////////////////////////////////////////
// The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr);

// With ... same as push but in same ARRAY in console

// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr);

// Same as seperated numbers
// console.log(1, 2, 7, 8, 9)
// console.log(...newGoodArr);

//Extend menu with new food
// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Grav', 'Burek']
// console.log(newMenu);

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 arrays or more
// const mainMenuJoinT = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mainMenuJoinT);

// Iterables: arrays,strings,maps,sets, NOT OBEJECTS
// const str = 'Jonas';
// const letters = [...str, , 'S.'];
// console.log(letters);
// console.log(...restaurant.categories, 'Dimitar Tucovik 101');
// let words = 'GORAN';
// console.log(...words);

// console.log('j', 'o', 'n' ....); // Same shit as above

// Clog the ing in string with inputs value // Real world Example
// const ing = [prompt("Let's make pasta! ingredient 1?"),
// prompt("Let's make pasta! ingredient 2?"),
// prompt("Let's make pasta! ingredient 3?")]
// restaurant.orderPasta(...ing);

// Objects 
// const newRestaurant = {
  // firstName: 'Anastasija',
  // lastName: 'Poposka',
  // ...restaurant,
// }
// console.log(newRestaurant);

// 
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Roma U Picku Mater';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// With Push
// let newPushArr = [];
// newPushArr.push(arr)
// console.log(newPushArr);

/////////////////////////////////////////////////////////////
// 

// Destructing Objects
// restaurant.orderDelivery({
//   time: '23:30',
//   addres: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// restaurant.orderDelivery({
//   addres: 'Chede F. Dame 101',
//   starterIndex: 1,
// })

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// Must have () before code
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching Variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // recive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(restaurant.order(2, 0));
// console.log(starter, mainCourse);

// // Nested destructuroing
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i,j)

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
