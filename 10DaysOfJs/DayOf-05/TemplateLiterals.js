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
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const defVal = Math.sqrt((Math.pow(p, 2)) - (16 * a));
    const x1 = (p + defVal) / 4;
    const x2 = (p - defVal) / 4;
    // console.log("Defult Variables : ", a, p);
    // console.log("Result : ", x2, x1);
    return [x2, x1];
}


function main(input) {
    // let s1 = +(readLine());
    // let s2 = +(readLine());
    console.log(input);
    let parsing = input.split('\n');
    let s1 = parseInt(parsing[0]);
    let s2 = parseInt(parsing[1]);

    [s1, s2] = [s1, s2].sort();

    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    console.log((s1 === x) ? x : -1);
    console.log((s2 === y) ? y : -1);
}


let values = "10\n14";
main(values);