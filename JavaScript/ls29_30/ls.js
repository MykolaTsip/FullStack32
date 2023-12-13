

// function Person () {
//     let age = 0;
//     let nameOfP = ''

//     function parent(name) {
//         if (!nameOfP) {
//             nameOfP = name
//         } else {
//             console.log('Tou crazy ! I have name ' + nameOfP);
//         }
//     }


//     function go () {

//         console.log('im going. I ' + nameOfP);
//     }

//     return {
//         parent,
//         go
//     }
// }

// let Petro =  Person();

// Petro.parent('Petro');
// Petro.go()
// Petro.parent('Vasya');
// Petro.go()


// var age = 11;

// let a = {
//     age: 0,
//     addAge: function() {this.age = this.age + 1}
// }

// console.log(a, 'aaa', age);

// a.addAge();
// a.addAge();
// a.addAge();

// console.log(a, 'aaa', age);

function Person(fName, lName) {
    let ppp = 10;
    this.fName = fName;
    this.lName = lName;
    this.age = 0;

    this.go = function () {
        console.log(`Im ${this.fName} - ${this.lName}. Im going`);
    }

    this.addAge = function () {
        this.age = this.age + 1;
        console.log(`my age is ${this.age}`);
    }
};


let Ivan = new Person('Ivan', 'III');

console.log(Ivan);

Ivan.go();
Ivan.addAge();
// Ivan.addAge();
// Ivan.addAge();


// let Petro = new Person('Petro', 'www');

// console.log(Petro);
