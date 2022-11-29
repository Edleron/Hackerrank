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
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/


function main(input) {
    //const S = readLine();
    const S = input;
    let Sf1 = 0;
    try {
        isNaN(Number(S)) ? error : console.log(S)
    }
    catch(err) {
        console.log("Bad String");
    }
}

const variables = "Test";

main(variables);