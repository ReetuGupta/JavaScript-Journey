//singleton object => using constructor

const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "reetu",
            lastname: "gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);


//ways of combine the object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // it will give obj another obj
//const obj3 = Object.assign({}, obj1, obj2, obj4) // it will give values in an object

const obj3 = {...obj1, ...obj2, ...obj4} // it is better, mostly used
//console.log(obj3);

const users = [ // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // array of keys
console.log(Object.values(tinderUser)); // array of values
console.log(Object.entries(tinderUser));// array of entries

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true




