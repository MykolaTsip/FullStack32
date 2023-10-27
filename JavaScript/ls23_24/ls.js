//// ======================== Recursion

// let a = [1, 4, 5, 6, 3, 5, 'dfsdf', true];


// console.log(a);
// console.log('-------------');

// // for, for of, for in, while, do while, forEach, reduce


// // function iter(ind, arr) {

// //     if (ind < arr.length) {
// //         console.log(arr[ind]);
// //         iter(++ind, arr)
// //     }
// // }


// function iter(ind, arr) {
//     if (ind > arr.length - 1) return;

//     console.log(arr[ind]);

//     // ind = ind + 1
//     iter(++ind, arr);
// }

// iter(0, a);


//// ============================== Closers

// function funk () {
//     let a = 1;

//     a = a + 1;

//     console.log(a);
// }



// // funk();
// // funk();
// funk();

// console.log(funk);


// function cl() {
//     let num = 0; // 10, 21, 16

//     function add(addedNum) {
//         console.log('------', addedNum);
//          num = num + addedNum; // 0 + 10, 10 + 11
//     }

//     function min(minusNum) {
//         console.log(num, minusNum);
//         num = num - minusNum; // 21 - 5
//     }

//     function getValue () {
//         return num // 21, 
//     }

//     return {
//         add,
//         min,
//         getValue
//     }
// }

// let myF = cl();

// myF.add(10);

// myF.add(11);

// let a1 = myF.getValue();

// console.log(a1);

// myF.min(5);

// console.log(myF.getValue());




//// Calback call

let arrr = [1, 4, 5, 11, 12];

// let aaaa = arrr.filter((el) => el < 10);
// console.log(aaaa);

function filterArrays(array, cb) {
    let filteredArr = [];

    for (let i = 0; i < array.length; i++) {
        let isFilterData = cb(array[i], i, array);

        if (isFilterData) {
            filteredArr.push(array[i])
        }
    }

    return filteredArr;
}


let fArr = filterArrays(arrr, (el) => el < 10)
console.log(fArr);

let f1 = filterArrays([1, 11, 'hello', true, 11, 555, 0], (el) => typeof(el) === 'number');
console.log(f1);




