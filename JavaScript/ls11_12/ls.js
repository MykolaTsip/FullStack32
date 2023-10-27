// ================================================================
// introduce in function (create & call)

// console.log(3333);

// function firstFunc () {
//     let a = 10;

//     console.log(2222);
//     console.log(a + 10);
//     console.log('===============');


//     // Лінійний пошук

//     let arr = [
//         {
//             phone: 'Xiomi',
//             price: 1000
//         },
//         {
//             phone: 'Samsung',
//             price: 1001
//         },
//         {
//             phone: 'Iphone',
//             price: 1002
//         },
//         {
//             phone: 'Lenovo',
//             price: 1003
//         },
//         {
//             phone: 'Meizu',
//             price: 1003
//         }
//     ]

//     let searchPh = 'Lenovo';

//     for (let i = 0; i < arr.length; i++ ) {
//         if (arr[i].phone === searchPh) {
//             document.write('<br> I found!! ' + searchPh);
//             break;
//         }
//     }
// }


// firstFunc()
// firstFunc()
// firstFunc()
// firstFunc()
// firstFunc()


// function secondFunc () {

// }

// ================================================================
// scope (lexical environment)

// for(var i = 0; i < 4; i++) {}

// console.log(i);

// if (2 > null) {
//     // let a = 10
//     var c = 11
// }

// console.log(c);

// {
//     // const b = 9
//     var b = 9
// }

// console.log(b);

// function aa () {
//     var dd = 'Hello'

//     console.log(2222);
//     document.write('dddd')

//     let a = 333
//     console.log(dd);
// }

// aa()

// // console.log(dd);
// console.log(a);

// ================================================================
// hosting (expression vs declaration)


// // console.log(a);
// console.log(ab);


// // // let a = 10
// // const a = 11
// var ab = 12

// funkA() 

// function funkA () { // Declaration
//     let a = 19
//     console.log(33333, a);
//     document.write('Hello im from funk')
// }
// funkA()


// // myFunk()

// const myFunk = function () { // Expression
//     let b = 32;
//     console.log(b);
// }

// myFunk()



// arguments

// function Abs(dataToWrite, num, sym) {
//     // document.write(dataToWrite)
//     // console.log(num);
// }

// let dTw = prompt
// let n = 3333


//     // dataToWrite = 'sym'; num
// Abs(dTw, n)

// preson 1
let num1 = +prompt('1')
let num2 = +prompt('2')
let ac = prompt('ac')

// if (ac === '+') {
//     console.log(num1 + num2);
// } else if (ac === '-') {
//     console.log(num1 - num2);
// } else if (ac === '/') {
//     console.log(num1 / num2);
// } else if (ac === '*') {
//     console.log(num1 * num2);
// }

// person 2
// let num11 = +prompt('1')
// let num22 = +prompt('2')
// let acc = prompt('ac')

// if (acc === '+') {
//     console.log(num11 + num22);
// } else if (acc === '-') {
//     console.log(num11 - num22);
// } else if (acc === '/') {
//     console.log(num11 / num22);
// } else if (acc === '*') {
//     console.log(num11 * num22);
// }


function calc(n1, n2, action) {
    if (action === '+') {
        console.log(n1 + n2);
        return n1 + n2;
    } else if (action === '-') {
        console.log(n1 - n2);
        return n1 - n2
    } else if (action === '/') {
        console.log(n1 / n2);
        return n1 / n2
    } else if (action === '*') {
        console.log(n1 * n2);
        return n1 * n2
    }
}


let result = calc(num1, num2, ac);
// calc(num11, num22, acc);

document.write('Your result is:' + result)


// 

