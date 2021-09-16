'use strict';

console.log([] + false - null + true); // NaN

// let y = 1;
// let x = y = 2;
// console.log(typeof (x)); // 2

console.log([] + 1 + 2); // 12

console.log('1'[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // false because && stop on false (null)

// console.log(!!(1 && 2) == (1 && 2)); // false because first is bolean

console.log(null || 2 && 3 || 4); // 3 because || stop on true (3)

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); // a != b (false)

console.log(typeof (+'Infinity')); // number Infinity

console.log(0 || '' || 2 || undefined || true || false); // 2 because it's first (true)



