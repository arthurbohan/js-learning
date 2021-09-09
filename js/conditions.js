'use strict';

if (4 != 4) {
    console.log('Ok');
} else {
    console.log('not');
}

const num = 50;

if (num < 49) {
    console.log('small number');
} else if (num > 51) {
    console.log('big number');
} else {
    console.log('its number');
}

const num2 = 59;
(num2 == 50) ? console.log('its number') : console.log('its not');

const num4 = 50;
switch (num4) {
    case 49:
        console.log('small number');
        break;
    case 100:
        console.log('big number');
        break;
    case 50:
        console.log('its number');
        break;
    default:
        console.log('its not a time to find');
        break;
}
