let a = 1
let b = '1'
let c = true
let d = null
let i = undefined
let s = Symbol(2)
let v = BigInt(444444)
// let o = {a: 1, b: 'dddd', c: true, ob: {num: 23, r: {h: 'Hello'}}}

// array
// let arr = [true, false, 1, 'Hello world']


//
// console.log(+false, true + ' d', 'its ' + undefined)

// let a1 = a + b + c;
// console.log(a1);

// console.log('dd ' + o)
// console.log(1 + o);
// console.log(true + o);


//
// console.log(Number(b))

// let dd = Number(true)

// console.log(dd);

// let bb = String(c)

// console.log(bb);

// let cc = Boolean(null);
// console.log(cc);


//
// console.log(
//     typeof(v)
// );

// console.log(typeof(d));

// console.log(typeof(i));


// var Var = 1


// console.log(arr)
// console.log(o);

// console.log(typeof([]));


// console.log(o.b);
// console.log(o.ob.num);
// console.log(o.ob.r.h);

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[3])


// let o = {a: 1, b: 'dddd', c: true, ob: {num: 23, r: {h: 'Hello'}}}

// // array
// let arr = [true, false, 1, 'Hello world',]

// // o.ob.num = 100

// // console.log(o);

// // arr[2] = 'Its index 2'

// // console.log(arr);


// // console.log(arr[10]);

// arr[6] = 12
// arr[7] = 'fffff'
// console.log(arr);

// console.log(arr[4]);


let user = {
    name: 'DDD',
    age: 44,
    wife: {
        name: 'DDDd',
        age: 33,
        location: {
            county: 'Ua',
            city: 'Kiiv'
        }
    },
    location: {
        county: 'Ua',
        city: 'Lviv',
        lan: 434434,
        lon: 35345345
    }
};

// let arr = [[[]], [[[[], [[]]], []]]]
let arr = [
    [],
    [  // = 1
        2,
        [ // = 1
            'dfsdf', 
             [],
              [ // = 2
                true // = 0
            ]
        ]  
    ]
];

console.log(arr[1][0]);
console.log(arr[1][1][2][0]);