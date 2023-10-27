const arr = [1, 2, 5, 6, 13, 66, 34, 43, 23, 55454, 777, 90, 9]; // let, const 


console.log('Цикл for');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

console.log('Цикл for of');
for (let el of arr) {
    console.log(el);
};


console.log('Цикл for in');
for (let el in arr) {
    console.log(arr[el])
};

console.log('Цикл while');
let i = 0;

while (i < arr.length) {
    console.log(arr[i]);

    i++;
};

console.log('Цикл do while');
let ind = 0;

do {
    console.log(arr[ind]);
    ind++;
} while (ind < arr.length)