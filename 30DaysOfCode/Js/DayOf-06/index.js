/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
*/


function processData(input) {
    input = input.split('\n');               
    for (i = 1; i < input.length; i++){
        var splitMechanis = input[i].split('');
        var drubings = "";
        var frabings = "";       
        
        for(t = 0; t < splitMechanis.length; t++){
            if(t % 2 === 0){
                drubings = drubings + splitMechanis[t];
            }else{
                frabings = frabings + splitMechanis[t];
            }
        }
        
        console.log(drubings + " " + frabings);      
    }        
}

variables = [2, "Hacker", "Rank"]
processData();