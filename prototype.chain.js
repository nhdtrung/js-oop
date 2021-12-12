// Animal constructor
function Animal() {}
// Set Animal's prototype
Animal.prototype.eat = function() {
    console.log('Eating')
}

// Cat constructor
function Cat(name) {
    this.name = name;
}

// Set Cat's prototype to be Animal's prototype
Cat.prototype = Object.create(Animal.prototype);

// Dog constructor
function Dog(name) {
    this.name = name;
}

// Set Dog's prototype to be Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log('woof!!!\n');
}

let chihuahua = new Dog('chihuahua');
console.log(chihuahua.name); // chihuahua
chihuahua.eat();             // eating
chihuahua.bark();            // woof!!!
let leopad = new Cat('Mew mew');
console.log(leopad.name);   // Mew
leopad.eat();               // eating

