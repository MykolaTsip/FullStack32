
// function isFind (arr, cb) {

// }

// Array.prototype.find

let a = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(a.find((val, index, arr) => {
    console.log('value : ' + val, 'index : ' + index, 'array : ' + arr);
    return val === 5
}));

console.log(this);


a = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.myFind = function (cb) {
    console.log(this);

    for (let i = 0; i < this.length; i++) {
        
        let isFound = cb(this[i], i, this);

        if (isFound) {
            return this[i];
        }
    }
}

console.log('========================');

let foundVal = a.myFind((val, index, arr) => {
    console.log('value : ' + val, 'index : ' + index, 'array : ' + arr);

    return val === 3;
});

console.log(foundVal);