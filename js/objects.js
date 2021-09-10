'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function () {
        console.log('test');
    }
};

// console.log(Object.keys(options).length);
options.makeTest();

const { border, bg } = options.colors;
console.log(border);

// delete options.name;

let counter = 0;

for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Property  ${i} is ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${key} is ${options[key]}`);
        counter++;
    }
}

console.log(counter);