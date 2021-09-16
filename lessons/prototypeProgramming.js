'use strict';

// let str = 'sum';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

const john = Object.create(solder);

// const john = {
//     health: 100
// };

// john.__proto__ = solder;

// Object.setPrototypeOf(john, solder);

john.sayHello();

