
import multiplyFunction from './ModuleB.js';
//import multiplyFunction from './ModuleB.js';
import { add, subtract } from './ModuleA.js';

const result1 = add(5, 3);
const result2 = subtract(10, 4);
const result3 = multiplyFunction(2, 6);

console.log(result1); // Output: 8
console.log(result2); // Output: 6
console.log(result3); // Output: 12

let s = "testString";
console.log(s.toUpperCase());

