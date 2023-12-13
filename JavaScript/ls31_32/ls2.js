
function An () {}

class Animal {
    id = Math.random();
    diam = 0;

    addDiam() {
        this.diam = this.diam + 1; 
    }

    addManyDim(countOfDim) {
        this.diam = this.diam + countOfDim;
    }
}

console.log(Animal);
// console.log(An);


// console.log(An()); 
// console.log(new An());
// // console.log(Animal()); == bad practice 


let a = new Animal();
// let b = new An();

console.log(a);
// console.log(b);
a.addDiam();
a.addDiam();

console.log(a);

a.addManyDim(30);
console.log(a);



// console.log(typeof(Animal.prototype));


let bb = new An()

let ob = {
    gg: 44,
    f: 'dsfsd'
}

// console.log(a instanceof Animal);
// console.log(bb instanceof Animal);
// console.log(bb instanceof An);
console.log(ob instanceof Animal);

