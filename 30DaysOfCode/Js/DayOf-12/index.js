'use strict';

/*
var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }
*/

/**** Ignore above this line. ****/


class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
   

    constructor(firstName, lastName, identification, scores) {
		super(firstName, lastName, identification);        
		this.testScores = scores;
	}

    calculate() {
        let average = this.testScores.reduce(
			function (a, b) {
				return a + b
			},
			0
		) / this.testScores.length

		return this.grade(average);
    }

    grade(value){
        if (value >= 90) {
			return 'O'
		} else if (value >= 80) {
			return 'E'
		} else if (value >= 70) {
			return 'A'
		} else if (value >= 55) {
			return 'P'
		} else if (value >= 40) {
			return 'D'
		} else {
			return 'T'
		}
    }
}

function main(input) {
    let parsing = input.split("\n");
    let lenghtName = parsing[0].split(" ");
    let firstName = lenghtName[0];
    let lastName = lenghtName[1];
    let id = lenghtName[2];
    let numScores = parseInt(parsing[1]);
    let testScores = new Array(parsing[1]);  
    let lenghtScore = parsing[2].split(" ");
    for (var i = 0; i < numScores; i++) {
        testScores[i] = parseInt(lenghtScore[i]);
    }
    /*
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }
    */

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

const variables = "Heraldo Memelli 8135627\n2\n100 80";
main(variables);