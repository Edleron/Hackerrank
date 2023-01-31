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


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
let modifyArray = (nums) => nums.map(x => x % 2 === 0 ? x * 2 : x * 3);

function main(input) {
    // const n = +(readLine());
    // const a = readLine().split(' ').map(Number);

    const n = input.split('\n');
    const a = n[1].split(' ').map(Number);
    // console.log(a);

    console.log(modifyArray(a).toString().split(',').join(' '));
}

let values = "5\n1 2 3 4 5"
main(values);