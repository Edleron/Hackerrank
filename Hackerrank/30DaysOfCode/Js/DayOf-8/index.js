/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   //processData(_input);
});

process.on('SIGINT', function(){
    process.stdout.write('\n end \n');
    processData(_input);
    process.exit();
});
*/


function processData(input) {
    let phoneBook = new Map();

    message = input.split("\n");

    var N = parseInt(message[0]);   
     for (let i = 1; i <= N; i++)
    {
        let variablesText = message[i].split(" ");
        phoneBook.set(variablesText[0], variablesText[1]);
    }

    for (let x = N + 1; x < message.length; x++)
    {
        if(phoneBook.has(message[x])){
            console.log(message[x] + "=" + phoneBook.get(message[x]))
        }else{
            console.log("Not found")
        }
    }
}

const inputValue = '3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry';

processData(inputValue);
