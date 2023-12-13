

// function Dd () {

//     return 'fff'
// }
// let a = Dd();
// console.log(a);

// function ee () {
//     this.arr = [1]
//     this.Hhhhhh = 'fksdmfosdmo'
//     this.ee;
// }

// // let bb = {
// //     arr: [43, 4]
// // }


// b.ee = true
// console.log(b);
// // console.log(bb);


// function userOfItstep (f_name, l_name) {
//     this.id = Math.random();
//     this.group = 'FullStack';
//     this.url = '../ddd/ddd.jpg';
//     this.diam = 0;
//     this.money = 0;
//     this.medMark = 12;
//     this.fName = f_name ?? ''
//     this.lName = l_name ?? ''
//     this.date = new Date();
//     this.visit = this.date;
// }

// function addToDatabase(user) {
//     console.log('added user');
// }


// let newUsers = 18;

// for (let i = 0; i < newUsers; i++) {
//     let user = new userOfItstep();
//     addToDatabase(user);
// }


function Cat () {
    this.name = 'ddd';
}

Cat.prototype.run = function () {
    console.log('i run');
}


function Dog () {
    this.name = 'Bbb'
}

// Dog.prototype = Cat.prototype;
Dog.prototype = Object.assign({},  Cat.prototype);
// Dog.prototype = {...Cat.prototype};
// Dog.prototype = JSON.parse(JSON.stringify(Cat.prototype))
// Dog.prototype = new Map(Cat.prototype) /// ...
// Dog.prototype = // for in, recursion || other libiraies


Cat.prototype.run = function () {
    console.log('im cat, i run very fast!!');
}


let Topic = new Dog();
let Mur = new Cat();

Topic.run();
Mur.run();

// let a = 44;
// let a = new Number(44)
// new Boolean(true)



let a = {
    a: 10,
    ob: {
        fi: 15
    },
    // bn: function () {}
    // bb: undefined
}

// let b = a;

// let b = Object.assign({}, a)
// let b = {...a};
// let b = JSON.parse(JSON.stringify(a));
// let b = new Map(a);
// for in, recursion || other libiraies



a.a = 20;
a.ob.fi = -1;

console.log(a);
console.log(b);