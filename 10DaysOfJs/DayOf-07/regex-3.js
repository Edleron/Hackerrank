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


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */


    /*
     * Do not remove the return statement
     */
    var re = RegExp('\\d+', 'g');
    return re;
}

function main(input) {
    const re = regexVar();
    // const s = readLine();
    const s = input;
    console.log(s);

    const r = s.match(re);

    for (const e of r) {
        console.log(e);
    }
}

let values = "102, 1948948 and 1.3 and 4.5"
main(values);