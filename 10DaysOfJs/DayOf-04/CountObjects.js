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
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let counter = 0;
    for (let index = 0; index < objects.length; index++) {
        if (objects[index].x === objects[index].y) {
            counter = counter + 1;
        }
    }
    return counter;
}


function main(input) {
    // const n = +(readLine());
    let objects = [];
    const parsing = input.split('\n');
    const n = parsing[0];

    for (let i = 1; i < parsing.length; i++) {
        // const [a, b] = readLine().split(' ');
        const [a, b] = parsing[i].split(' ');

        objects.push({ x: +(a), y: +(b) });
    }

    console.log(getCount(objects));
}

let values = "5\n1 1\n2 3\n3 3\n3 4\n4 5";
main(values);