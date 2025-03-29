//function definition
function myName() {
    // console.log("R");
    // console.log("E");
    // console.log("E");
    // console.log("T");
    // console.log("U");
}

//function reference
myName //=> it will not print anything

//function execution
//myName()

function add(num1, num2){//=> function parameters
    // console.log(num1 + num2);
}

//add(5, 9)//=>function arguments

//other ways

function addnum(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

const result = addnum(5, 9)
// console.log("Result: ", result);

// function login(username){
//     return `${username} just logged in!`;
// }

function login(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(login("Reetu"));

//Rest operator

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))//returns an array 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

//objects and arrays using function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//or

handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
