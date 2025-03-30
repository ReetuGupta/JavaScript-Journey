// for of

// ["", "", ""]
// [{}, {}, {}]



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}



const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



// Maps: Used for unique values, no duplicacy

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);


//it will take india once only in map in sequence
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//objects are not iteratable so forof will not work

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }