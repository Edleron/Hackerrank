'use strict';

/*
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
*/

let testValues = "6\nriya riya@gmail.com\njulia julia@julia.me\njulia sjulia@gmail.com\njulia julia@gmail.com\nsamantha samantha@gmail.com\ntanya tanya@gmail.com"
function main(input) {
    // const N = parseInt(readLine().trim(), 10);
    const parsing = input.split('\n');
    const N = parseInt(parsing[0])

    let checkList = [];
    const pattern = /@gmail\.com$/i;

    for (let NItr = 0; NItr < N; NItr++) {
        // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
        const firstMultipleInput = parsing[NItr + 1].split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];

        if (pattern.test(emailID)) {
            checkList.push(firstName);
        }
    }

    checkList.sort();

    checkList.forEach(element => {
        console.log(element);
    });
}

main(testValues);