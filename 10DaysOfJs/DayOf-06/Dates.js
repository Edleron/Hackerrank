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

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dt = new Date(dateString);
    let temper = dt.getDay();

    switch (temper) {
        case 0:
            dayName = "Sunday"
            break;
        case 1:
            dayName = "Monday"
            break;
        case 2:
            dayName = "Tuesday"
            break;
        case 3:
            dayName = "Wednesday"
            break;
        case 4:
            dayName = "Thursday"
            break;
        case 5:
            dayName = "Friday"
            break;
        case 6:
            dayName = "Saturday"
            break;
    }

    return dayName;
}


function main(input) {
    //const d = +(readLine());
    let d = input.split('\n');


    for (let i = 1; i <= d[0]; i++) {
        //const date = readLine();
        const date = d[i];
        console.log(getDayName(date));
    }
}

let values = "2\n10/11/2009\n11/10/2010"
main(values);