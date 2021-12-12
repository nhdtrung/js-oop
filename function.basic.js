// Create duck
const duck = () => 'A duck';

// Create fish
const fish = () => 'A fish';

const getAnimal = function(type, numsOfLeg) {
    console.log(`${type()} has ${numsOfLeg} legs`);
}

const aDuck = getAnimal(duck, 2);
console.log(aDuck); // A duck has 2 legs

const aFish = getAnimal(fish, "no");
console.log(aFish); // A fish has no legs

