// Create new person object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        console.log(`Age is ${this.age}`);
    }

    getName() {
        console.log(`Name is ${this.name}`);
    }
}

// Create new worker which will implement Person later
function Worker(position) {
    this.position = position;
}

// implement Person by using prototype
Worker.prototype = new Person('Tony', 24);

// Worker have postition to work on
Worker.prototype.showPosition = function () {
    console.log(`Work at ${this.position}`);
}

// Init new Worker object
let workerA = new Worker('IT derpartment');
workerA.getName(); // Name is Tony
workerA.getAge(); // Age is 24
workerA.showPosition(); // Work at IT derpartment
