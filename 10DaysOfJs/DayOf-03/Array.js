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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => b - a);
    const firstData = nums[0];
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== firstData) {
            return nums[index];
        }
    }
}


function main(data) {
    //const n = +(readLine());
    //const nums = readLine().split(' ').map(Number);
    const input = data.split('\n');
    const n = input[0];
    const nums = input[1].split(' ').map(Number);

    console.log(getSecondLargest(nums));
}

let values = "5\n2 3 6 6 5"
main(values);