
let arr = [3, 54, '4', 1, 0, 11, 100, '44', 11, 11];


// let el = arr.find((el, i, arr) =>  el == 11);
// console.log(el);
// console.log('---------');

// let s = [];
// let sI = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         console.log(33);
//         // arr[i] = s[i]
//         s[sI] = arr[i];
//         sI++
//     }
// }
// console.log(s);

// let arrFilter = arr.filter((el, i, arr) => el >= 10);
// console.log('---------');

// console.log(arrFilter);


// let somEl = arr.some((el, i, ar) => el > 50);
// console.log(somEl);
// let evEl = arr.every((el) => el > 3);
// console.log(evEl);

// let ind = arr.indexOf(11);
// console.log(ind);

// let lInd = arr.lastIndexOf(11);
// console.log(lInd);

// let sortArr = arr.sort((a, b) => {
//     if (Number(a) > Number(b)) {
//         return 1
//     } else {
//         return -10
//     }
// });


let sortArr = arr.sort((a, b) => a - b)
console.log(sortArr);

let sortA = arr.sort((a, b) => b - a);
console.log(sortA);


let str = ['Наталя', 'Дмитро', 'Леся', 'Дана', 'Алла'];

let arS = str.sort();
console.log(arS);