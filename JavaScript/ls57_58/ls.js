
// Realise

// Test
// const arr =  [1, 2, 3, 4, 5];
// const foundVal = 4

// const cbFind4 = (valueOfArr) => valueOfArr === foundVal;

// const testedData = arr.find(cbFind4);

// const resultOfTest = testedData === foundVal ? 'Test passed' : 'Test failed';

// console.log(resultOfTest);


let reg1 = /[a-z]/;

console.log(reg1);

// reg1.exec

let aa = new RegExp(reg1);


let ee = aa.test('dgdfgdf SeeD');
// let ee = aa.exec('44');


console.log(ee);

//

function* dsf() {
    // console.log(3333);

    // return 0
    // return 1
    // return 2
    // return 3

    yield 0;
    yield 1;
    yield 2;
    yield 3;


    // return 11
}

// dsf().next()
// dsf().next()

// let a = dsf().next()
// console.log(a);


// console.log(dsf());

// let a = dsf()

// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// let b = dsf()

// console.log(b.next());
// console.log(b.next());
// console.log(b.next());



// let b = dsf().next()

// console.log(b);



/////


// let a = Object.create({}, {
//     b: {
//        value: 44,
//        writable: false,
//        configurable: false,
//        enumerable: true,

//        set(data) {
//         this.value = data
//        },
//        get() {
//         return this
//        }
//     },
//     c: {
//         value: 'ddd',
//         enumerable: true
//     }
// })


// a.b = 77;
// delete a.b

// console.log(a);
// console.log(Object.keys(a));

// for (let key in a) {
//         // const element = object[key];
//         // console.log(key, element);
// }


// a.b = 3
// let b = a.b

// console.log(b);
// console.log(a.set(3));





const person = {
    firstName: 'John',
    lastName: 'Doe'
};
  
  // Define a property descriptor for 'fullName' property
//   Object.defineProperty(person, 'fullName', {
//     get: function() {
//       return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   });
  
//   console.log(person.fullName); // "John Doe"
  
//   // Set the 'fullName' property, which invokes the setter
//   person.fullName = 'Jane Smith';
  
//   console.log(person.firstName); // "Jane"
//   console.log(person.lastName);  // "Smith"


let fg = {d: 2}

let fM = new Map().set('fdgdfg', 45343).set(fg, true).set(null, null);

// console.log(fM);
// fM.forEach((data, k, ma) => console.log(data, k, ma))

// let dd = fM.get('fdgdfg')
// let gg = fM.get(fg)
// console.log(dd, gg);


// console.log(fM.values());
// console.log(fM.keys());
// console.log(fM.entries());
// console.log(fM.has(null));

// fM.delete(null)
// console.log(fM);
// // fM.clear();
// // console.log(fM);

// console.log(fM.size);



let mSet = new Set([1, 4, true, 'ff']).add('ffff').add(null).add(4);

// console.log(mSet);

// console.log(mSet.entries());
// console.log(mSet.keys());
// console.log(mSet.values());
// console.log(mSet.has(null));


// mSet.forEach((data, data2, dd) => console.log(data, data2, dd))

// mSet.delete(4)
// console.log(mSet);

// console.log(mSet.size);

// mSet.clear()
// console.log(mSet);


// let fgf = {
//     d: '3434'
// }

// let ddd = new WeakMap()

// ddd.set(fgf, fgf)

// fgf = null;


// console.log(ddd);



let data = new WeakSet().add({d: '333'}).add({d: 444})

console.log(data);

