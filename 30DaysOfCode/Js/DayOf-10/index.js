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
    //const n = parseInt(readLine().trim(), 10);

    let N = parseInt(input);
    let sum = 0;
    let max = 0;

    while(N > 0) 
    {
        if (N % 2 === 1) 
        {
            sum++;

            if (sum > max)
                max = sum;
                       
        }
        else sum = 0;        

        N = parseInt(N / 2);       
    }
    console.log(max);
}

main(6);