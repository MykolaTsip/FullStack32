// anonim functions

// function () {console.log(2222)}

// () => {console.log(3333);}

// let a = 10


// function nam() {console.log(222);}
// (function nam() {console.log(222);})()
// nam()

// (() => {console.log(333)})();


function calc (num1, num2, action) {
    function plus (a, b) { return a + b}
    function minus (a, b) { return a - b}
    function mn (a, b) { return a * b}


    if (action === '+') {
        return plus(num1, num2);
    } else if (action === '-') {
        minus(num1, num2);
    } else if (action === '*') {
       return mn(num1, num2)
    }
}

let num = calc(5, 4, '+')


function a () {

    return 22
}

console.log(22);

let b = a()