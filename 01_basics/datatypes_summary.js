// in js official document there are 2 types of datatypes :
//1. Primitive(call by value)
//2. Non-Primitive(call by reference)

//Primitive:
//7 types: strings, number, bigint, symbol, null, undefined, boolean


//Non-Primitive:
// Arrays, objects, functions

//array
const heros = ["shaktiman", "naagraj", "doga"];
//console.log( typeof heros);//object

//object
let myObj = {
    name: "ritu",
    age: 22
}

//console.log( typeof myObj); // object


//function

const myFunction = function(){
   // console.log("Hello world");
}

//console.log( typeof myFunction); // function or we say object function



//************Stack and Heap*************

//Stack(primitive) => for all primitive types stack memory is allocated means copy of the variable is created and if any changes is done then they will not reflect in original address 

let tutorial = "jstutorial";

let practice = tutorial;

//console.log(practice); // jstutorial

practice = "react";

//console.log(practice);//react
//console.log(tutorial);//jstutorial

//bcz copy of tutorial is given to practice not the original




//heap => all non primitive datatypes are stored in heap memory means reference of address is assigned no copy is created works on actual address so if any changes is done by variable then it will be reflected to original value.

let js = {
    frameworkone : "react",
    frameworktwo : "vue",
    frameworkthree : "angular"
};

let javaScript = js;

console.log(javaScript.frameworkone);//react

javaScript.frameworkone = "react.js";

console.log(javaScript.frameworkone);//react.js

console.log(js.frameworkone);//react.js

console.log(js);

//here actual js is changed from react to react.js


