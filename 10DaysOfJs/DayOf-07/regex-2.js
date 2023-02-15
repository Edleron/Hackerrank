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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    /*
    * 're' adlı bir RegExp nesne değişkeni bildirin.
    * 'Mr.', 'Mrs.', 'Ms.', 'Dr.' veya 'Er.' ile başlayan bir dizeyle eşleşmelidir.
    * ardından bir veya daha fazla harf gelir.
    */

    /*
    * Do not remove the return statement
    */
    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/;
    return re;
}


function main(input) {
    const re = regexVar();
    // const s = readLine();
    const s = input;

    console.log(!!s.match(re));
}

let values = "Mr.X";
main(values);