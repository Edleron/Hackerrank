'use strict';

/*
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    let defn = 1;
    for (let index = n; index >= 1; index--) {
        defn = defn * index;        
    }
    return defn;
}

function main(input) {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const n = parseInt(readLine().trim(), 10);

    const n = parseInt(input);

    const result = factorial(n);

    console.log(result)
    //ws.write(result + '\n');

    //ws.end();
}

main(7);