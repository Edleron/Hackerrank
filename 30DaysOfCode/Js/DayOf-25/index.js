function processData(input) {
    //Enter your code here
    var arr = input.split('\n');
    for (var i = 1; i < arr.length; i++) {
        var n = arr[i];
        if (isPrime(n)) console.log("Prime");
        else console.log("Not prime");

    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});


function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    if (n <= 3) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function main(input) {
    var arr = input.split("\n");
    for (let i = 1; i < arr.length; i++) {
        let n = arr[i];
        if (isPrime(n)) console.log("Prime");
        else console.log("Not prime");
    }
}

let values = "3\n2\n31\n33"
main(values)