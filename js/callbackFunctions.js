'use strict';

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(1);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Im lerning ${lang}`);
    callback();
}

function done() {
    console.log('I ended this lesson');
}

learnJS('JavaScript', done);