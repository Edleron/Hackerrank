'use strict';

/*
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    //inputString = inputString.split('\n');

    //main();
});


function readLine() {
    return inputString[currentLine++];
}
*/

function main(index, array) {
    // const n = parseInt(readLine().trim(), 10);

    // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const n = parseInt(index);
    
    const arr = array.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    let defN = [n];
    let outputS = "";
    for (let i = 0; i < n; i++) {
        defN[i] = arr[(n-1) - i];
        outputS = outputS + defN[i].toString() + " ";
    }
    console.log(outputS);
}

main(9, "1 2 3 4 5 6 7 8 9");


