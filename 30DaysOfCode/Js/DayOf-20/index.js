'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main(input) {
    // const n = parseInt(readLine().trim(), 10);

    // const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const pars = input.split("\n");
    const n = pars[0];
    const a = pars[pars.length - 1].split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let swaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                let v = a[j];
                a[j] = a[j + 1];
                a[j + 1] = v;
                swaps++;
            }
        }

        if (swaps == 0) {
            break;
        }
    }
    console.log("Array is sorted in " + swaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}

let values = "3\n4 5 1"

main(values);