///////////////////////////////cassidoo Interview Question of the Week June 17th, 2024///////////////////////////////

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

function warmerTemperatures(temperatures){
    
}