///////////////////////////////cassidoo Interview Question of the Week July 1st, 2024///////////////////////////////

//TASK
// Define a FruitStand class that allows you to add different types of fruits with their quantities and prices, update them, and
// calculate the total value of all the fruits in the stand. Implement the following methods:
// addFruit(name, quantity, price), updateQuantity(name, quantity), and totalValue()!

// Example:
// Create a new fruit stand
// let stand = FruitStand()

// Add fruits to the stand
// stand.addFruit("apple", 10, 0.5)
// stand.addFruit("banana", 5, 0.2)
// stand.addFruit("cherry", 20, 0.1)

// Update the quantity of an existing fruit
// stand.updateQuantity("banana", 10)

// Calculate the total value of all fruits in the stand
// console.log(stand.totalValue())

//PSEUDOCODE
// create class call FruitStand
// add properties using dot notation, which will create objects with different key-value pairs in them
// add methods of adding additional fruits, updating quantity, and calcualting the total value of the fruitstand

//SOLUTION

class fruitStand {
	constructor(name, quantity, price) {
		this.name = name
		this.quantity = quantity
		this.price = price
	}
	addFruit(name, quantity, price) {
		//fill in code
	}
	updateQuantity(name, quantity) {
		//fill in code
	}
	totalValue() {
		//fill in code
	}
}
