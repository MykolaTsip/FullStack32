
// function Car (year, type) {
//     this.year = year;
//     this.type = type;
//     this.name = 'ddd';
//     this.model = 'ddd';

//     this.reName = function (newName) {
//         this.name = newName;
//     }
// }

// let Audi = new Car(2022, 'cupe');
// let Bmw = new Car(2010, 'cabrr');

// console.log(Audi);
// console.log(Bmw);

// Bmw.reName('BMW')

// console.log('----------');
// console.log(Audi);
// console.log(Bmw);


let car = {
    name: '',
    addName: function (newN) {this.name = newN}
}


// let a = String(333)
// console.log(a);

// function Str(data) {
//     this.data = data.toString();


//     this.toTrim = function() {
//         this.data = this.data.trim()
//         return this.data
//     }


//     this.UpperC = function() {
//         this.data = this.data.toUpperCase()
//         return this.data
//     }


//     return this.data;
// };



// console.log(String(333));

// let ownStr = new Str('aaaa') // 'aaaa'
// console.log(ownStr.UpperC());
// console.log(ownStr);



// console.log(Array);
// console.log(String);


// Array.prototype.MyOwnLogger = function () {
//     console.log('im from logger');
// };


// Array.prototype.MyOwnFind = function (findData) {
//     console.log(a, 'dsfsdf');
//     console.log(this);

//     for (let i = 0; i < this.length; i++) {
//         if (findData === this[i]) {
//             return findData
//         } 
//     }

//     return false
// }


// // let fff = [2];

// // fff.MyOwnLogger()
// // fff.MyOwnLogger()
// // fff.MyOwnLogger()
// // fff.MyOwnLogger()

// let a = [1, 3, 5, 6, 7, 9, 10];


// let findData = a.MyOwnFind(2);
// console.log(findData);


// Array.prototype.filterArrays = function (cb) {
//     let filteredArr = [];
//     let arr = this;

//     for (let i = 0; i < arr.length; i++) {
//         let isFilterData = cb(arr[i], i, arr);

//         if (isFilterData) {
//             filteredArr.push(arr[i])
//         }
//     }

//     return filteredArr;
// }


// let a2 = [1, 3, 5, 6, 7, 9, 10];


// let newAA = a2.filterArrays((el) => el > 5);
// console.log(a2);
// console.log(newAA);


//////////////////////////////////////
function Animal () {}


Animal.prototype.eat = function () {
    console.log('im eating !!!');
}

function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
    this.age = 0;

    // this.go = function () {
    //     console.log(`Im ${this.fName} - ${this.lName}. Im going`);
    // }

    // this.addAge = function () {
    //     this.age = this.age + 1;
    //     console.log(`my age is ${this.age}`);
    // }
};

Person.prototype = Animal.prototype;

Person.prototype.go = function () {
        console.log(`Im ${this.fName} - ${this.lName}. Im going`);
}



let Ivan = new Person('Name', 'LAst Name');
let Petro = new Person('dfsd', 'fsdfsdf');
let Vasyl =  new Person('dfsd 22', ' 32r 2fsdfsdf');

console.log(Ivan);
console.log(Petro);
console.log(Vasyl);


Ivan.go();
Vasyl.go();
Vasyl.eat()



