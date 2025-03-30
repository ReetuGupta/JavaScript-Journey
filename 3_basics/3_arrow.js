//this:
// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. 
// Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

const myobject = {
    username: "Reetu Gupta",
    password: "1234",

    welcome: function(){
        console.log(`${this.username}, welcome to the function`);
        console.log(this); // refers to object context
    }
}

myobject.welcome()
myobject.username = "sam"
myobject.welcome()
console.log(this); //{}=> bcz in node no global object but when it will execute in browser's window => console then it will return window bcz window is global obj
//In Node.js, this at the top level refers to {} (module.exports), not global. But in the browser, this at the top level refers to window because window is the global object in browsers.


