// Immediately Invoked Function Expressions
//
// Function Expression: a function that is stored in a variable
// Invoked: the function has been executed

// Basic IIFE
(function () {
    console.log('executed immediately!') // immediately!
})();

// IIFEs with parameters
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 1));


const exampleModule = (function() {
  return{
    sayHelloMixin: function() {
        console.log("Hello to an awesome tune");
    },
    singMixin: function() {
        console.log("Singing to an awesome tune");
    }
  }
})();
exampleModule.sayHelloMixin();
exampleModule.singMixin();

class Duck {};
Duck.prototype.swim = () => console.log("Duck is swimming");

let malahDuck = new Duck();
malahDuck.swim();
