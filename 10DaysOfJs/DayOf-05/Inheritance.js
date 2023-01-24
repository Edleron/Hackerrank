class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 *  The JavaScript prototype property allows you to add new properties to object constructors:
 *  Javascript içerisinde protype diye ek feature vardır. Bu class'lara ek özellikler tanımlayabilmemize olanak sağlar.
 */
Rectangle.prototype.area = function () {
    return this.w * this.h;
}


/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}