'use strict';

const arr = [1, 2, 3, 6, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//
arr.pop();
arr.push(10);
arr.map();

//
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let value of arr) {
    console.log(value);
}

arr.forEach(function (item, index, arr) {
    console.log(`${index}: ${item} into array ${arr}`);
});


const str = prompt('', '');
const products = str.split(', ');

products.sort();
console.log(products.join('; '));


