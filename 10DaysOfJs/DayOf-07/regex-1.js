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
    ^ => ilk öğe eşleşmeleri    
    () => içinde yakalanan eşleşen değeri depolar
    [aeiou] => parantez içindeki herhangi bir karakterle eşleşir
    . => herhangi bir karakterle eşleşir:    
    + => 1 veya daha fazla oluşum için (bu, str uzunluğunun > 3 olmasını sağlar)    
    \1 => önceden saklanan eşleşmeyle eşleşir.
    \2, 2 örnek önce saklanan eşleşen öğeyi arar.
    \3, 3 önce saklanan eşleşen öğeyi arar, vb.

    $, eşleşen öğenin dizinin sonunda olmasını sağlar
    */
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    /*
     * Do not remove the return statement
     */
    return /^([aeiou]).+\1$/;
    return re;
}


function main(input) {
    const re = regexVar();
    // const s = readLine();
    const s = input;

    console.log(re.test(s));
}


let values = "abcda";
main(values);

// Source -> https://www.hackerrank.com/challenges/js10-regexp-1/topics
