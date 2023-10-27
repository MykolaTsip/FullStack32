// console.log(222);


// let a = 11.33333
// let a1 = a.valueOf();
// console.log(a1);

// let b1 = a.toString();
// console.log(b1);

// let c1 = a.toPrecision(2);
// console.log(c1);

// let d1 = a.toLocaleString();
// console.log(d1);

// let e1 = a.toFixed(1);
// console.log(e1);


// let f1 = a.toExponential(2);
// console.log(f1);



// let obj = {
//     car: true,
//     model: 'audi',
//     year: 2005,
//     wheel: 4,
//     engine: 2.5,
//     parents: ['Q5', 'Q7', 'Acvv']
// }


// let keysOfObj = Object.keys(obj);
// console.log(keysOfObj);

// let valuesOfObj = Object.values(obj);
// console.log(valuesOfObj);

// let entrOfObj = Object.entries(obj);
// console.log(entrOfObj);



// // ==================================================


// let obj = {
//     car: true,
//     model: 'audi',
//     year: 2005,
//     wheel: 4,
//     engine: 2.5,
//     parents: ['Q5', 'Q7', 'Acvv']
// }


// let ob = Object.create({}, {
//     a: { value: 10 },
//     car: { value: true }
// })
// console.log(ob);


// let ob2 = obj;

// let ob3 = Object.assign({}, obj);

// console.log(obj);
// console.log(ob2);
// console.log(ob3);
// console.log('=========');

// obj.car = false;

// console.log(obj);
// console.log(ob2);
// console.log(ob3);

// let o = {
//     cat: 'mur',
//     yr: 5
// }

// let ob44 = Object.assign(o, obj);
// console.log(ob44);

// // =======================================

// let obj = {
//     car: true,
//     model: 'audi',
//     year: 2005,
//     wheel: 4,
//     engine: 2.5,
//     parents: ['Q5', 'Q7', 'Acvv']
// }

// let arr = [['hello', 'world'], ['age', 22], [true, 23]];

// let objNew = Object.fromEntries(arr);
// console.log(objNew);

// let str = obj.hasOwnProperty('car');
// let str1 = obj.hasOwnProperty('year');
// let str2 = obj.hasOwnProperty('name');

// console.log(str);
// console.log(str1);
// console.log(str2);

// let s = Object.getOwnPropertyNames(obj)
// console.log(s);


// obj.year = 3000;
// console.log(obj);

// Object.freeze(obj);

// obj.year = 1;
// obj.owner = 'Alla';
// console.log(obj);


// // =====================

let obj = {
    car: true,
    model: 'audi',
    year: 2005,
    wheel: 4,
    engine: 2.5,
    parents: ['Q5', 'Q7', 'Acvv']
}

// obj.year = 1;
// obj.owner = 'Alla';
// console.log(obj);

// Object.seal(obj)

// obj.year = -200;
// obj.secondOwner = 'Petro';

// console.log(obj);


// let isF = Object.isFrozen(obj);
// console.log(isF);
// Object.freeze(obj);
// let isF2 = Object.isFrozen(obj);
// console.log(isF2);


let str = Object.toString(obj);
console.log(str);


