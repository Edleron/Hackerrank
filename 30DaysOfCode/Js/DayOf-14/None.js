class Difference {
    constructor(variables) {
        this.variables = variables        
    }
    
    computeDifference() {  
      
        return Math.max(...this.variables) - Math.min(...this.variables);
    }
}

function main(input) {
    let parsing = input.split("\n");
    let arrayCount = parsing[0];
    let arrayVarialbes =  parsing[1].replace(/\s+$/g, '').split(" ").map(arrTemp => parseInt(arrTemp, 10));   

    const p1 = new Difference(arrayVarialbes);
    console.log(p1.computeDifference());
}

const variables = "3\n1 2 5";
main(variables);