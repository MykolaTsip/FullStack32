class Animal {
    // name 
     age = 0;
    constructor(name) {
        this.name = name;
    }


    addAge() {
        this.age += 1;
    }


    set setData (data) {
        this.name = data
    }

    get getData () {
        return this.age;
    }
}

class Dog extends Animal {}


let a = new Animal('ddd');

console.log(a.getData, a);
a.setData = 'ffff';

a.addAge();

console.log(a.getData, a);