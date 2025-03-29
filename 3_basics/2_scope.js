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