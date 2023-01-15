'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    // main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let rec = {
        length: 0,
        width: 0,
        perimeter: 0,
        area: 0
    }

    rec.length = a;
    rec.width = b;
    rec.perimeter = 2 * (rec.length + rec.width);
    rec.area = rec.length * rec.width;
    return rec;
}

function main(input) {
    // const a = +(readLine());
    // const b = +(readLine());

    const parsing = input.split('\n');
    const a = parsing[0];
    const b = parsing[1];

    const rec = new Rectangle(Number(a), Number(b));

    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

let values = "4\n5";
main(values);