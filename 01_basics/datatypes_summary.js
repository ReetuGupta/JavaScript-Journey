// in js official document there are 2 types of datatypes :
//1. Primitive(call by value)
//2. Non-Primitive(call by reference)

//Primitive:
//7 types: strings, number, bigint, symbol, null, undefined, boolean


//Non-Primitive:
// Arrays, objects, functions

//array
const heros = ["shaktiman", "naagraj", "doga"];
console.log( typeof heros);//object

//object
let myObj = {
    name: "ritu",
    age: 22
}

console.log( typeof myObj); // object


//function

const myFunction = function(){
    console.log("Hello world");
}

console.log( typeof myFunction); // function or we say object function

