let array1 = [3, 54, '4', 1, 0, 11, 100, '44', 11, 11];
console.log(array1, '=====================');

// 1
let el = array1.find((el) => el === '44');
console.log(el, '1');

// 2
let filt = array1.filter(el => el < 40);
console.log(filt, '2');

// 3
let som = array1.some(el => el > 100);
console.log(som, '3');

// 4
let ev = array1.every(el => el < 90);
console.log(ev, '4');

// 5
let ind = array1.indexOf(3);
console.log(ind, '5');

// 6
let sot = array1.sort((a, b) => b - a);
console.log(sot, '6');