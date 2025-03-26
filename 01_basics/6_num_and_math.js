const score = 400
// console.log(score); //it will give 400

const balance = new Number(100)
//console.log(balance); //[Number: 100]

//numbers also have many methods like toFixed, toString, toPrecision

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // will give till 2 decimal points

const otherNumber = 123.8966

 //console.log(otherNumber.toPrecision(4)); // till 4 numbers=> 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); => 10,00,000 => in Indian standard 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it will return object
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// generates random no btw 0(inclusive) and 1 (exclusive)
//console.log(Math.random());

// generates no btw 0 to 9.999... (not exactly 9)
//console.log(Math.random()*10);

// no btw 1 to 10.999
//console.log((Math.random()*10) + 1); 

// will range from 1 to 10 bcz floor removes decimals and rounds down
//console.log(Math.floor(Math.random()*10) + 1);

// will range from 2 to 11 bcz ceil rounds up to the next integer
//console.log(Math.ceil(Math.random()*10) + 1);


//if we want in a particular range 
let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // btw 10 to 20
