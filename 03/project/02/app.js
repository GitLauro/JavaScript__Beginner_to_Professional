const inventory = [];

const item1 = {
    name: "Alpha",
    model: "2024",
    cost: 0,
    quantity: 1,
}

const item2 = {
    name: "Beta",
    model: "2024",
    cost: 10,
    quantity: 1,
}

const item3 = {
    name: "Charlie",
    model: "2024",
    cost: 100,
    quantity: 1,
}

inventory.push(item1, item2, item3);
console.log(inventory);
console.log("Quantity is:", inventory[2].quantity);

