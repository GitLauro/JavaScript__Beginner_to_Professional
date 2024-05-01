class Employee {
    constructor(firstname, lastname, yearsWorked) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.yearsWorked = yearsWorked;
    }
}

Employee.prototype.details = function () {
    return `${this.firstname} ${this.lastname} :: ${this.yearsWorked}`;
}

const arr = [];
const emp1 = new Employee("Jill", "Smith", 20);
const emp2 = new Employee("Tammy", "Smith", 22);

arr.push(emp1, emp2);

for (let i in arr) console.log(`Employee: ${arr[i].details()}`);
