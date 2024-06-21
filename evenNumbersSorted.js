///////////////////////////////cassidoo Interview Question of the Week 03JUN24///////////////////////////////

//TASK
// Write a function that takes an array of integers and returns a new array containing only the even numbers, and sorted.

//PSEUDOCODE
// get array of numbers
// create new arr
// use .filter to select only even values using % 2 === 0
// use .sort to sort array values
// return sorted arr

//SOLUTION
function onlyEvens(arr) {
	let ans = arr.filter(elem => elem % 2 === 0)
	return (ans = ans.sort((a, b) => a - b))
}

console.log(onlyEvens([1, 2, 3, 4, 5, 2]))
console.log(onlyEvens([7, 8, 1, 0, 2, 5]))
console.log(onlyEvens([11, 13, 15]))
