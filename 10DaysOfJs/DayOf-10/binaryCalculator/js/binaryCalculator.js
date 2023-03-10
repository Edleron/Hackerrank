let elem = document.getElementById("res");

function checkOperator() {
    if (elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')) {
        return true;
    }
}

function atachZero() {
    elem.innerHTML += '0';
}

function atachOne() {
    elem.innerHTML += '1';
}

function atachSum() {
    if (elem.innerHTML.length != 0 && !checkOperator()) {
        elem.innerHTML += '+';
    }
}

function atachSub() {
    if (elem.innerHTML.length != 0 && !checkOperator()) {
        elem.innerHTML += '-';
    }
}

function atachMul() {
    if (elem.innerHTML.length != 0 && !checkOperator()) {
        elem.innerHTML += "*";
    }
}

function atachDiv() {
    if (elem.innerHTML.length != 0 && !checkOperator()) {
        elem.innerHTML += "/";
    }
}

function atachClear() {
    elem.innerHTML = '';
}

function atachCalculated() {
    if (!checkOperator()) {
        let regex_1 = /\d+/g
        let regex_2 = /[\+\-\*\/]+/g
        let numbers = elem.innerHTML.match(regex_1);
        let operations = elem.innerHTML.match(regex_2);
        while (operations.length > 0) {
            Process(numbers, operations)
        }
        elem.innerHTML = numbers[0].toString(2);
    } else {
        alert("Line must ends with number.")
    }
}

function Process(nums, operat) {
    switch (true) {
        case operat.includes('*'):
            Calculated("*", nums, operat)
            break;
        case operat.includes('/'):
            Calculated("/", nums, operat)
            break;
        case operat.includes('+'):
            Calculated("+", nums, operat)
            break;
        case operat.includes('-'):
            Calculated("-", nums, operat)
            break;
        default:
            break;
    }
}

function Calculated(value, nums, operat) {
    let indexOf = operat.indexOf(value);
    let parametersOneF = indexOf != 0 ? parseInt(nums[indexOf - 1], 2) : parseInt(nums[indexOf], 2);
    let parametersTwoF = parseInt(nums[indexOf + 1], 2)
    let result = math_it_up[value](parametersOneF, parametersTwoF);
    nums.splice(indexOf, 2);
    nums.splice(indexOf, 0, result.toString(2));
    operat.splice(indexOf, 1);
}


var math_it_up = {
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y }
};


function mathTestCase() {
    let test = math_it_up['+'](1, 2);
    console.log(test);
}
