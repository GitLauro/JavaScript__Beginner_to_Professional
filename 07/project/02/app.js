class Menu {
    #price1 = 10;
    #price2 = 20;
    constructor(quantity1, quantity2) {
	this.quantity1 = quantity1;
	this.quantity2 = quantity2;
    }

    totalCost() {
	return (this.quantity1 * this.#price1) + (this.quantity2 * this.#price2);
    }

    get total() {
	return this.totalCost();
    }
}

const menu1 = new Menu(1, 6);
const menu2 = new Menu(0, 2);
const menu3 = new Menu(6, 7);

console.log(menu1.total, menu2.total, menu3.total);
