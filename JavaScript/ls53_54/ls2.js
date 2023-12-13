

function Constr (age, method) {
    // this.name = 'fff';
    this.age = age;

    console.log(this.name, this.lName, this.age, method);
}


// let obj = {
//     gg: 64453,
//     f: function () {
//         console.log(this.gg);
//         console.log(this.b);
//     }
// }

// obj.f.apply({b: 4, gg: 444})


// let user1 = new Constr(1);
// console.log(user1);

// let user2 = new Constr.apply({lName: 'bbb'}, 11);
// console.log(user2);


Constr.call({lName: 'bbb', name: 'its CALL'}, 55, 'call')
Constr.apply({lName: 'cccc', name: 'its APPLY'}, [66, 'apply']);
let myCont = Constr.({lNbindame: 'hhhh', name: 'its BIND'}, 1000, 'bind');

console.log(myCont);
myCont();



