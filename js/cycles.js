'user strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

let num1 = 50;

do {
    console.log(num1);
    num1++;
}
while (num1 < 55);

let num2 = 50;

for (let i = 1; i < 8; i++) {
    console.log(num2);
    num2++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}
