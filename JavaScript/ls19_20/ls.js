// console.log(2222);

// let arr = [1, 3, 5, 6, 8, 1, 4, 5, 3]

// console.log(arr);

// // let arrRev = arr.sort((a, b) => b - a)
// // console.log(arrRev);

// let arRe = arr.reverse();
// console.log(arRe);


// let ar = [1, ['f', 'fff', ['fgd', 1, [true]]]]
//        // 1, 'f', 'fff', 'fgd', 1
// let rmass = ar.flat(3);

// console.log(rmass);


// let arrr =  [1, 3, 5, 6, 8, 1, 4, 5, 3, 'Hello'];
// let isS = false

// arrr.forEach(el => {
//     if (el === 'Hello') {
//         isS = true
//     }
// })

// if(arrr.includes('Hello')) {
//     isS = true
// }


// let str = arrr.join(' - ');
// console.log(str);


// let a = '1, 3, 5, 6, 8, 1, 4, 5, 3, Hello'
// let newSA = a.split(', ');
// console.log(newSA);


// let ar1 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 'Hello'];
//                    // (el, i, arr) => {return 22}
// let mutedAr = ar1.map((el, i, arr) => {
//     if (typeof(el) === "number") {
//        return el + 100
//     } else if (typeof(el) === "string") {
//        return el + ' From UA'
//     }
// });

// console.log(mutedAr);


// let ar1 = [1, 3, 5, 6];
// let a = ar1.reduce((prev, current) => {
//     console.log(prev, current);
//     console.log('==========');

//     return current + prev
// });
// console.log(a);


// let users = [
//     // 0
//     {name: 'Alla', age: 34}, // 34
//     {name: 'Наталя', age: 31}, // 65
//     {name: 'Дана', age: 24},   // 89
//     {name: 'Максим', age: 33}, // 122
// ];


// let sumAge = users.reduce((prev, current) => {
//     console.log('prev: ', prev, 'Cureent: ', current);
//     console.log('============');
//     return prev.age + current.age;
// });


// let sumAge = users.reduce((prev, current) => {
//     console.log('prev: ', prev, 'Cureent: ', current);
//     console.log('============');
//     return {age: prev.age + current.age};
// });

// let sumAge = users.reduce(
//     (prev, current) => {
//     console.log('prev: ', prev, 'Cureent: ', current);
//     console.log('============');
//     return prev + current.age
//     },
//     0
// );

// console.log(sumAge);
