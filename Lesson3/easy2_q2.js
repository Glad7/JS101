let numbers = [1, 2, 3, 4, 5];
let = numbersReversed = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let numbersSorted = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let numbersForEach = [];

numbers.slice().reverse().forEach((element) => numbersForEach.push(element));

console.log(numbers);
console.log(numbersForEach);