let ob = {
    a: 'dfsf',
    b: 'dgsdgsd',
    c: 'dsfsdgdfsgdfg',
    d: 'vfplrtt',
    ee: true,
    'dgfdgfd': 2323,
    ff: {
        age: 44
    },
    43: true,
    true: 'dff' 
}

// for (let i in ob) {
//     console.log(
//         typeof(i), i
//     );
// }

// document.write(ob.ee + '<br>');
// document.write(ob.ff.age);

console.log(
    ob['ff'].age,
    ob.ff.age,
    ob['ff']['age']
);