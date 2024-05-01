class Person {
    constructor(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
    }
}

const jill = new Person("Jill", "Smith");
const tammy = new Person("Tammy", "Smith");

console.log("Hello", jill.firstname);
console.log("Hello", tammy.firstname);
