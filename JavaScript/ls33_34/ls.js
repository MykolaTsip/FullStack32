

// function Person (age) {
//     this.name = 'Vasya';
//     this.age = age

//     let f = 10

//     // this.greeting = function () {
//     //     console.log('Hello im person. My name is ' + this.name);
//     // }
// }


// Person.prototype.greeting = function () {
//     console.log('Hello im person. My name is ' + this.name);
// }


// let Vas = {
//     name: 'vas'
// }

// let Vasya = new Person(55);
// let petya = new Person(55);
// let petro = new Person(55);

// console.log(Vasya);

// Vasya.greeting()

// Vas.age = 55
// console.log(Vas);


// function Prog() {
//     this.name = 'programmer'
// }


// Prog.prototype =  Object.assign({}, Person.prototype);

// Person.prototype.greeting = () => console.log('Hahahahahah');

// let newPr = new Prog();


// newPr.greeting();
// Vasya.greeting()



// // Наслідування

class Animal {
    name = 'Mur'

    constructor(name) {
        this.name = name;


        // for (let i = 0; i < 10; i++) {
        //     console.log(444);
        // }
    }

    // this.name = name;


    addName (newName) {
        this.name = newName;
    }

    run (text = '') {
        console.log('im RUN! ' + text + this.name);
    }

    eat () {
        this.run()
        console.log('im ate');
    }

    sleep () {}

    // swim () {}
}


// let cat = new Animal('CATTT');

// console.log(cat);

// cat.run('fdgnsdfgjjof');


// cat instanceof Animal


class Dog extends Animal {
    constructor(name, dayOfBirth) {
        super(name)
        // this.name = name;
        this.dayOfBirth = dayOfBirth   
    }

    
    swim() {
        console.log('im swim, im ' + this.name  + ` Data of Birth: ${this.dayOfBirth}`);
        // console.log(super);

        // super.run()
    }

};

// Dog.prototype = Object.assign({}, Animal.prototype);
let Topic = new Dog('TT', '2005/10/19');
console.log(Topic);

Topic.addName('Topic');

Topic.run();
Topic.run();
Topic.run();

Topic.swim()


