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

    let arr = Array(6);
    let pars = input.split("\n");
    for (let x = 0; x < 6; x++) {
        //arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        arr[x] = pars[x].replace(/\s+$/g, '').split(" ").map(arrTemp => parseInt(arrTemp, 10));       
    }
    let max = -9 * 7;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {         
            if (j + 2 < 6 && i + 2 < 6) {
                let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];                
                if(sum > max) max = sum;
            }
        }        
    }

    console.log(max);
}

const variables = "1 1 1 0 0 0\n0 1 0 0 0 0\n1 1 1 0 0 0\n0 0 2 4 4 0\n0 0 0 2 0 0\n0 0 1 2 4 0";
main(variables);