class Person {
    constructor(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
    }

    fullname() {
	return this.firstname + ' ' + this.lastname;
    }
}

const jill = new Person("Jill", "Smith");
const tammy = new Person("Tammy", "Smith");

console.log(jill.fullname());
console.log(tammy.fullname());

