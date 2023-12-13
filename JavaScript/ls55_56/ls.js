
let num1 = prompt('Enter n1')
let num2 = prompt('Enter n2')


function add(n1, n2) {
    let sum = n1 + n2;

    let action = f();

    if (action) {
    ///
    } else {
        ///
    }

    return sum;
}


function f() {
    return 463
}

let data = add(num1, num2)
console.log(data);


//// Testing
const emn1 = 3;
const emn2 = 2;

const expD1 = 5;

//  test 1
let addSum = add(emn1, emn2);

let resultTest = addSum === expD1 ? 'Test passed success' : 'Test failed';

console.log(resultTest);