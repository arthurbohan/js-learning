'use strict';
const overlay = document.querySelector('.overlay'),
    link = document.querySelector('a'),
    btns = document.querySelectorAll('button');

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true });
});

// stop link 
const consoleElement = function (event) {
    event.preventDefault();
    console.log(event.target);
};

link.addEventListener('click', consoleElement);
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

