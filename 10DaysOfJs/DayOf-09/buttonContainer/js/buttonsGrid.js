let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("btn5");
let b6 = document.getElementById("btn6");
let b7 = document.getElementById("btn7");
let b8 = document.getElementById("btn8");
let b9 = document.getElementById("btn9");

function wiseRotation() {
    [b1.innerHTML, b2.innerHTML, b3.innerHTML, b4.innerHTML, b6.innerHTML, b7.innerHTML, b8.innerHTML, b9.innerHTML] =
        [b4.innerHTML, b1.innerHTML, b2.innerHTML, b7.innerHTML, b3.innerHTML, b8.innerHTML, b9.innerHTML, b6.innerHTML]
}

b5.addEventListener("click", wiseRotation)