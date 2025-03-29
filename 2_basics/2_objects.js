//Objects can be created using the Object() constructor or the object initializer / literal syntax.

//singleton => using constructor
Object.create;

//using object literals => not singleton

const mySym = Symbol("key1");

const JsUser = {
    name: "Reetu",
    "full name": "Reetu Gupta", // accesed using []
    [mySym]: "mykey",//symbol in js
    age: 18,
    location: "Lko",
    email: "reetu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

//in objects we can give objects , arrays, functions ,all..

//accessing can be using . or []

//console.log(JsUser.email);
//console.log(JsUser["isLoggedIn"]);
//console.log(JsUser["full name"]); // can't be accessed using . operator
//console.log( typeof JsUser["mySym"]);// string=> but this is symbol so use sq brackets in obj.
//console.log(JsUser[mySym]);

JsUser.email = "ritu@google.com";// update
//Object.freeze(JsUser);// object freeze so no changes in it

//console.log(JsUser);

JsUser.greeting = function(){ //adding fun in object
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser);





