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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let messages = "";
    try {
        messages = s.split('').reverse().join('');
        console.log(messages);
    } catch (error) {
        messages = s.toString();
        console.log(error.message);
        console.log(messages);
    }
}


function main(input) {
    // const s = eval(readLine());
    const s = input;
    reverseString(s);
}

let values = 12345;
main(values);