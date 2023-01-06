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

    //main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return "YES"
    }
    throw a === 0 ? new Error('Zero Error') : new Error('Negative Error')
}


function main(input) {
    // const n = +(readLine());
    const n = input.split("\n")

    for (let i = 1; i <= n[0]; i++) {
        // const a = +(readLine());

        const a = n[i];
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}

let values = "3\n1\n2\n0"
main(values);