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

function main(N) {
    //const N = parseInt(readLine().trim(), 10);
    if(N === 2 || N === 4){
        console.log("Not Weird");
    }
    else if(N === 3){
        console.log("Weird");
    }
    else if(N >= 3 && N <= 23){
        console.log("Weird");
    }
    else if(N === 29){
        console.log("Weird");
    } 
    else{
        console.log("Not Weird");
    }
}

main(5);