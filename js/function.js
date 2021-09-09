'use strict';

function showFirstMessage() {
}

showFirstMessage();

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 5));

function ret(){
    let num = 40;

    return num;
}

const logger = function(){
    console.log('Hello');
};

logger(); // работает эта функция тольк тогда когда мы ее задали

const calculator = (a, b) => {
    console.log(1);
    return a + b;
};

