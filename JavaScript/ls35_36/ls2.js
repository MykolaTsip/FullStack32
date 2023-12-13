
let a = {
    "a": {
        h: 'df'
    },
    b: 2,
    c: undefined,
    d: function () {},
    e: NaN
}

// let b = a;

// a.b = 4

// console.log(a, b);

// let b = JSON.parse(JSON.stringify(a))

// a.b = 5;
// a.a.h = 5;

// console.log(a, b);

// let c1 = JSON.stringify(a);
// console.log(c1, a);

// let c2 = JSON.parse(c1);
// console.log(c2);


// let d = prompt('dfdfd')
// console.log(d);
// document.write(d)



let k = 'dfksdkfsKMSD#(R(#RMSMSKKDMSKMFKMKRWRWE';

let token = 'token'

// localStorage.setItem(token, k);

let myT = localStorage.getItem(token);
console.log(myT);

// localStorage.setItem('kk', 222)

// localStorage.setItem('obj', JSON.stringify(a));

let objFS = JSON.parse(localStorage.getItem('obj'))
console.log(objFS);


// localStorage.clear()
// localStorage.key(44)
// console.log(localStorage.length);
// localStorage.removeItem('kk')


sessionStorage.setItem('fdsfsd', 'fsdfsd')

let ff = sessionStorage.getItem('fdsfsd')
console.log(ff);

sessionStorage.clear()




// console.log(
//     document.cookie 
// );

// document.cookie = "user=John; domain=learn.javascript.ru; path=/"


// let name1 = prompt('enter your name');

// let newUser = {
//     name1,  // name1: name1
//     data_create: new Date()
// }

// console.log(newUser);
console.log(new Date());
console.log(new Date().getSeconds());
console.log(new Date().getDay());
console.log(new Date().toDateString());
console.log(new Date('1995-12-17T03:24:00'));

let hr = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

document.write(`tine: HH (${hr}) MM (${m}) SS (${s})`);