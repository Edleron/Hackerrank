/*
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

*/

function main(iValue, dValue, sValue) {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.  
    
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.

    // Print the sum of the double variables on a new line.

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.

    // i = i + parseInt(readLine());
    // d = (d + parseFloat(readLine())).toFixed(1);    
    // s = s + String(readLine());

    i = i + parseInt(iValue);
    d = (d + parseFloat(dValue)).toFixed(1);    
    s = s + String(sValue);
    console.log(i);
    console.log(d);
    console.log(s);    
}

main(4,4.0,"Saenne");