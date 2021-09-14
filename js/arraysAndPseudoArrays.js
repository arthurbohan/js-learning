'use strict';

const arr = [1, 2, 3, 6, 8];

function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum); // for numeric 
console.log(arr); 

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

arr.forEach(function(item){
    console.log(`${item}`);
});

const str = prompt('', '');
const products = str.split(', ');
console.log(products);

products.sort(); // alfavite only for string params
console.log(products.join('; '));


