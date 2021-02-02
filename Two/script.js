'use strict';


//////////////////////////////////////////////////
// Default Parameters
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1,
//     price = 199 * numPassengers) {



//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2)
// createBooking('LH123', 5, 100)
// // Deafult for deafult value
// createBooking('LH123', undefined, 1000)

///////////////////////////////////////////////////////
// How Passing Arguments Workds: VALUE vs REFERENCE 

// const flight = 'LH123';
// const goran = {
//     name: 'Goran Stefanovski',
//     passport: 12354876547,
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999',
//         passenger.name = 'Mr.' + passenger.name;

//     if (passenger.passport === 12354876547) {
//         alert('Ckeck In')
//     } else {
//         alert('Wrong Passport')
//     }
// }

// // checkIn(flight, goran);
// // console.log(flight);
// // console.log(goran);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(goran);
// checkIn(flight, goran);
// console.log(flight);
// console.log(goran);

///////////////////////////////////////////////////////
// First-CLass and Heigher-Order Functions
// Functions Accepting Callback Functions

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }


// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// };

// // Heigher-order Function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best', upperFirstWord)
// transformer('JavaScript is the best', oneWord)

// const high5 = () => {
//     console.log('Hi!');
// }

// document.body.querySelector('button').addEventListener('click', high5);

// ['Goran', 'Ane', 'Hinata', 'Shiva'].forEach(high5)

////////////////////////////////////////////////////////
// Functions Returning Functions

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting}, ${name}`);
//     }
// }

// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting}, ${name}`);
//     }
// }

// const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
// greetArr('Hey')('Goran')

///////////////////////////////////////////////////////
// The call and apply methods

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//         console.log(this.bookings);
//     }
// }

// lufthansa.book(239, 'Goran Stefanovski')
// lufthansa.book(635, 'Anastasija Poposka')

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// // console.log(eurowings);


// const swiss = {
//     airline: 'Swiss Airlines',
//     iataCode: 'SWISS',
//     bookings: []
// }

// book.call(lufthansa, 666, 'Ovaj Kuro')
// book.call(eurowings, 23, 'Sarah Srca');
// book.call(swiss, 987, 'Merry Cooper')
// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// // Apply Method
// const flightData = [420, 'Bob Marley'];
// // book.apply(swiss, flightData);

// book.call(swiss, ...flightData)

// ////////////////////////////////////////////////////////
// // The Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);
// bookEW(753, 'Steven Williams')

// const bookWE23 = book.bind(eurowings, 23);
// bookWE23('Jana Stefanovska');
// bookWE23('Lence Stefanovska')

// const bookSWIS666 = book.bind(swiss, 666);
// bookSWIS666('Hinata Stefanovska');
// bookSWIS666('Shiva Mantra')

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++
//     console.log(this.planes);
// }
// // lufthansa.buyPlane()
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Applications

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addTaxOne = addTax.bind(null, 0.23);
// console.log(addTaxOne(100));
// console.log(addTaxOne(23));

// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     }
// }

// const addVat = addTaxRate(0.23);
// console.log(addVat(100));
// console.log(addVat(23));

////////////////////////////////////////////////////
// Coding Challenge #1

// let pollBtn = document.querySelector('.poll');

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),

//     registerNewAnswer() {
//         // Get answer
//         const answer = Number(
//             prompt(
//                 `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//             )
//         );
//         // Register answer
//         typeof answer === 'number' && answer < this.answers.length
//             && this.answers[answer]++;
//         // console.log(this.answers);

//         // this.displayResults()
//         // this.displayResults('string')

//     },

//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll Resualts are ${this.answers.join(',')}`);
//         }
//     }
// }

// // poll.registerNewAnswer();

// pollBtn.addEventListener('click', poll.registerNewAnswer);
// // console.log(poll.displayResults());

//////////////////////////////////////////////////////////////
// Immediatly Invoked Functions Expressions

// // Funcion Called Immediatly
// (function () {
//     console.log('Call this immediatly');
//     const isPrivate = 23;
// })();

// // Wont work
// // console.log(isPrivate);

// (() => console.log('Call This Arrow Function'))();

/////////////////////////////////////////
// Closures

// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(passengerCount);
//     }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker)

// Closures Examples


// Example One
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function () {
//     const b = 777
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f();
// console.dir(f)
// // Re-assigned f function
// h();
// f();
// console.dir(f)

// // Example Two

// const boardPassengers = function (n, wait) {
//     // const perGroup = Math.floor(n / 3);

//     setTimeout(function () {
//         console.log(`We are now boarding ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000)

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////////////////
// Coding Challenge #2
// const header = document.querySelector('h1');

// (function () {
//     header.style.color = 'red';
// })()

// document.body.addEventListener('click', function () {
//     if (header.style.color === 'red') {
//         header.style.color = 'blue'
//     } else {
//         header.style.color = 'red'
//     }
// })