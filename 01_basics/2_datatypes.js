"use strict"; // treats all code with newer js version

//alert(10 + 10); // This only works in browser not in nodejs

//8 datatypes in js

//string
let Name = "Reetu"

//boolean
let isLoggedIn = true

//bigint => used for large integer values

//symbol => unique

//object => key value pairs in curly braces

//undefined 
let city

//null
let area = null

//number
let phone = 123456789

console.log(typeof null);      // object(js bug)
console.log(typeof undefined);//undefined
console.log(typeof Symbol());//symbol
console.log(typeof 10n);//bigint
console.log(typeof true);//boolean
console.log(typeof phone);//number
console.log(typeof Name);//string
console.log(typeof {})//object

//OR

console.table([
    typeof null,    
    typeof undefined, 
    typeof Name, 
    typeof 10n, 
    typeof isLoggedIn, 
    typeof Symbol(), 
    typeof {}, 
    typeof 1243
])

//"typeof" tells the type of the data types
