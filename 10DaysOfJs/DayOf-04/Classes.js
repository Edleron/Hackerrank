/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(values) {
        this.values = values;
    }

    perimeter() {
        // The reduce() method runs a function on each array element to produce(reduce it to) a single value.
        // The reduce() method works from left - to - right in the array.See also reduceRight().
        // The reduce() method does not reduce the original array.
        return this.values.reduce((this.myReduceFunction));
    }

    myReduceFunction(total, value, index, array) {
        return total + value;
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());