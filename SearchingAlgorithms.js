let fruits = ['apple', 'banana', 'cherry', 'banana', 'date'];
let bananaIndex = fruits.indexOf('banana5'); // 1
console.log(bananaIndex);
let lastBananaIndex = fruits.lastIndexOf('banana'); // 3


let colors = ['red', 'green', 'blue'];
let containsGreen = colors.includes('green'); // true
let containsYellow = colors.includes('yellow'); // false


let numbers = [1, 4, 9, 16, 25];
let found = numbers.find(number => number > 10); // 16
let foundIndex = numbers.findIndex(number => number > 10); // 3
