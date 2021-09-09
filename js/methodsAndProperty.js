'use strict';

let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //5

const arr = [1, 2, 3];
console.log(arr.length);

const str = 'test';
console.log(str[2]);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const logg = 'Hello world';
console.log(logg.slice(6, 11)); //world
console.log(logg.slice(-5, -1));
console.log(logg.substring(6, 11)); //world (cant be with negative arg)
console.log(logg.substr(6, 5)); //second arg means count of symbols

//math

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(typeof (test))); //12
console.log(parseFloat(test)); //12.2
