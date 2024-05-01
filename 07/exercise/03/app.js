class Animal {
    constructor(species, sounds) {
	this.species = species;
	this.sounds = sounds;
    }
    
    speak() {
	console.log(`${this.species} ${this.sounds}`);
    }
}

Animal.prototype.eat = function () {
    return this.species + " is eating";
}

const cat = new Animal("cat", "meow");
const dog = new Animal("dog", "bark");
cat.speak();
console.log(dog.eat());
console.log(dog);
