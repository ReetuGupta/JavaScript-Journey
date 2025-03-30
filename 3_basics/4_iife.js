//Immediately Invoked Function Expression(IIFE) =>  JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
// Syntax:

// (function (){ 
// // Function Logic Here. 
// })();

//example:
(function assign(){
    //named iife
    console.log(`Task is assigned`);
})();

//unamed iife
(() => {
    console.log(`Task2 is assigned`);
})();

((name) => {
    console.log(`Task3 is assigned to ${name}`);
})(`reetu`);