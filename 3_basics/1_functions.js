//function definition
function myName() {
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("U");
}

//function reference
myName //=> it will not print anything

//function execution
//myName()

function add(num1, num2){//=> function parameters
    console.log(num1 + num2);
}

//add(5, 9)//=>function arguments

//other ways

function addnum(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

const result = addnum(5, 9)
console.log("Result: ", result);
