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

function getMaxLessThanK(n, k) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let current = i & j;
            if (result < current && current < k) {
                result = current;
                if (result === k - 1) {
                    return result;
                }
            }
        }
    }

    return result;
}

function main(input) {
    // const q = +(readLine());

    /*
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
    */

    const q = input.split('\n');

    for (let index = 1; index <= q[0]; index++) {
        const [n, k] = q[index].split(' ').map(Number);
        console.log("Result : " + getMaxLessThanK(n, k));
    }
}

let valuesV1 = "3\n5 2\n8 5\n2 2";
let valuesV2 = "1\n8 5";
main(valuesV2);


// Source => https://www.w3schools.com/js/js_bitwise.asp