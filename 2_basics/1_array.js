//Arrays are "list-like-objects".

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
//console.log(shopping[0]);

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

//by using length we can find length of array
//console.log(random.length);

//array methods
//indexof,
// push, pop => add and del at end
// shift, unshift => unshift adds at start while shift delets from start

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

 //console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3));

// slice, splice
//slice only returns the part of array including 1st element and excluing last element from the range and does not change the array whereas in splice it returns the array part and changes the array means it gives the array as a result and modifies the array with the values which left after splice 

//console.log("A ", myArr); // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

//console.log(myn1);//[1,2]
//console.log("B ", myArr);//B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);//C [0,4,5]
//console.log(myn2);//[1,2,3]



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);// will push whole array as an element in another array

//console.log(marvel_heros);//["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros);// this will merge two arrays
 //console.log(allHeros);

 //spread op => merges all the arrays 2, 3 etc..

 const new_array = [...marvel_heros, ...dc_heros, ...myHeors, ...myArr]
 console.log(new_array);
 
 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);

console.log(Array.from("Reetu"))//['R','e','e','t','u'] => converts in array
console.log(Array.isArray("Reetu"))// false since "Reetu" is a string not an array
console.log(Array.from({name: "Reetu"})) // interesting //[] => empty array bcz it can not convert objects in arrays we have to give extra info for that

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // also returns an array // [100, 200, 300]