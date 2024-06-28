///////////////////////////////cassidoo Interview Question of the Week June 24th, 2024///////////////////////////////

//TASK
// Write a function that takes an array of daily temperatures and returns an array where each element is the number of days
// you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// Example:
// > dailyTemperatures([70, 70, 70, 75])
// > [3, 2, 1, 0]

// > dailyTemperatures([90, 80, 70, 60])
// > [0, 0, 0, 0]

// > dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// > [1, 1, 4, 2, 1, 1, 0, 0]

//PSEUDOCODE
// create function that takes in an array of daily temperatures
// nested for loop in for loop, compare first element to next element, then next element, until the end
// if first element is greater than next element, move on to next element
// else if, first element is less than next element, take that index number, add one (to account for index starting at 0), and push into ansArray
// else if, first element is greater than next element, and reaches end of that for loop iteration (which would be i-1 === array.length && first element
// is greater than next element, push 0 into ans Array)

//SOLUTION
function warmerTemperatures(temperatures) {
	// create ansArray to house newArray
	let ansArray = []

	// setup outer loop
	for (let i = 0; i <= temperatures.length; i++) {
		// setup inner loop, this lets the outer loop stay on one value, while the inner loop can cycle through the rest of the array
		for (let j = i + 1; j - 1 < temperatures.length; j++) {
			//check for when inner loop is on the last value of the array, if it is on the last value of the array, there are no more days to compare to (does not get warmer), so push 0
			// when true, execute code block, then break out of inner loop and execute next outer loop iteration
			if (j === temperatures.length) {
				ansArray.push(0)
				break
				// check if the current temp is less than the next compared temp (meaning it gets warmer), then push the index of that element minus the index of current
				// when true, execute code block, then break out of inner loop and execute next outer loop iteration
			} else if (temperatures[i] < temperatures[j]) {
				ansArray.push(j - i)
				break
				// if the current temp is the same as the compared temp, then it does not meet any of the conditions, and inner loop continues to next inner loop iteration
			}
		}
	}
	return ansArray
}

console.log(warmerTemperatures([70, 70, 70, 75]))
console.log(warmerTemperatures([90, 80, 70, 60]))
console.log(warmerTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
