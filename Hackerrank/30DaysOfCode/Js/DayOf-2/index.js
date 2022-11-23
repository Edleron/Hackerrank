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

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    // Write your code here
    let totalCost = 0.0;
    let round = 0;
    
    let tip = parseFloat(meal_cost * tip_percent / 100);
    let tax = parseFloat(meal_cost * tax_percent / 100);
    
    totalCost = meal_cost + tip + tax;
    round = parseInt(Math.round(totalCost));
    console.log(round);
}

function main() {
    //const meal_cost = parseFloat(readLine().trim());

    //const tip_percent = parseInt(readLine().trim(), 10);

    //const tax_percent = parseInt(readLine().trim(), 10);

    //solve(meal_cost, tip_percent, tax_percent);
    
    solve(10.25, 17, 5);
}

main();
