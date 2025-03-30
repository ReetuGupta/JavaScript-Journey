//var c = 300
let a = 300 //global scope
if (true) { // function scope
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);//10
    
}

// console.log(a);//300
// console.log(b);
// console.log(c); // 30 => which is wrong bcz c should not come out of block so not to use var


function one(){
    const username = "reetu"

    function two(){
        const website = "youtube"
        console.log(username); // this will execute bcz its in one()
    }
    // console.log(website); // this will not bcz its not in scope bcz website is in two()

    two()

}

//one() // reetu
//if "//one()" then nothing will be displayed 


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); => error
}

// console.log(username); =>error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //=> 6

function addone(num){
    return num + 1
}



addTwo(5) // error(Cannot access before initialization) bcz it can't be used like this
const addTwo = function(num){
    return num + 2
}