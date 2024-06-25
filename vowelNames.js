///////////////////////////////cassidoo Interview Question of the Week June 17th, 2024///////////////////////////////

// NOTE: Given answer for sortNames(["Edward", "Alphonse", "Roy", "Winry"]) may be incorrect.
// Winry and Roy both have the same number of vowels, so should then be sorted in alphabetical order like the first example. However, they are not.
// This solution will assume sorting by number of vowels in descending order (big to small), then alphabetically (a to z)

//TASK
// This week's question:
// Write a function that takes a list of names and returns the names sorted by the number of vowels in each name in descending order. If two names have the same number of vowels, sort them alphabetically.

// Example:

// > sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])
// > ["Piccolo", "Vegeta", "Gohan", "Goku"]

// > sortNames(["Edward", "Alphonse", "Roy", "Winry"])
// > ["Alphonse", "Edward", "Winry", "Roy"]

//PSEUDOCODE
// added in below with solution

//SOLUTION

function sortByVowelCountThenAlphabet(arr) {
	// sort initial array alphabetically to set base as alphabetically sorted (a through z)
	let alphaArr = arr.sort()
	console.log(alphaArr)

	// count number of vowels in each name
	let vowelCount = 0
	let vowelCountArr = []
	for (let i = 0; i < alphaArr.length; i++) {
		for (let j = 0; j <= alphaArr[i].length; j++) {
			if (j === alphaArr[i].length) {
				vowelCountArr.push(vowelCount)
				vowelCount = 0
			} else if (
				alphaArr[i][j] === 'a' ||
				alphaArr[i][j] === 'A' ||
				alphaArr[i][j] === 'e' ||
				alphaArr[i][j] === 'E' ||
				alphaArr[i][j] === 'i' ||
				alphaArr[i][j] === 'I' ||
				alphaArr[i][j] === 'o' ||
				alphaArr[i][j] === 'O' ||
				alphaArr[i][j] === 'u' ||
				alphaArr[i][j] === 'U'
			) {
				vowelCount++
			}
		}
	}
	console.log(vowelCountArr)

	// key value pair creation as objects inside an array
	let combinedPairs = alphaArr.map(function (arr1, arr2) {
		return { name: arr1, vowels: vowelCountArr[arr2] }
	})
	console.log(combinedPairs)

	// sort combinedPairs by number of vowels descending. If number of vowels are the same, nothing will happen and it will stay in alphabetical order
	let combinedPairsSorted = combinedPairs.sort((a, b) => b.vowels - a.vowels)
	console.log(combinedPairsSorted)

	// take name from each object in combinedPairSorted, in order, and push to final answer array
	let finalAnswer = []
	for (let i = 0; i < combinedPairsSorted.length; i++) {
		finalAnswer.push(combinedPairsSorted[i].name)
	}
	return finalAnswer
}

console.log(sortByVowelCountThenAlphabet(['Goku', 'Vegeta', 'Piccolo', 'Gohan']))
console.log(sortByVowelCountThenAlphabet(['Edward', 'Alphonse', 'Roy', 'Winry']))
