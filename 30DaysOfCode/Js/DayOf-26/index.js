function processData(input) {
    //Enter your code here

    const arr = input.split(/\s/).map(Number);
    const sDay = Number(arr[0]);
    const sMount = Number(arr[1]);
    const sYear = Number(arr[2]);

    const rDay = Number(arr[3]);
    const rMount = Number(arr[4]);
    const rYear = Number(arr[5]);

    var result = 0;

    result = (sYear > rYear) ? 10000 :
        (sYear < rYear) ? 0 :
            (sMount > rMount) ? ((sMount - rMount) * 500) :
                ((sMount == rMount) && (sDay > rDay)) ? ((sDay - rDay) * 15) : 0;

    console.log(result);
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

/*
let values = "23 12 1234\n19 9 2468"
function main(input) {
    const arr = input.split(/\s/).map(Number);
    const sDay = Number(arr[0]);
    const sMount = Number(arr[1]);
    const sYear = Number(arr[2]);

    const rDay = Number(arr[3]);
    const rMount = Number(arr[4]);
    const rYear = Number(arr[5]);

    var result = 0;

    result = (sYear > rYear) ? 10000 :
        (sYear < rYear) ? 0 :
            (sMount > rMount) ? ((sMount - rMount) * 500) :
                ((sMount == rMount) && (sDay > rDay)) ? ((sDay - rDay) * 15) : 0;

    console.log(result);
}

main(values);
*/