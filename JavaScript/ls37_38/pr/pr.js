

class Person {
    name;
    age;
    job;

    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }


    talk(topic) {
        console.log(`Im ${this.name} and i wors as ${this.job} and i have ${this.age} and i will talk about ${topic}`);
    }
     
    go(where) {
        console.log(`I will go to ${where}, but i go to job every day`);
    }
    
    run() {
        console.log('i like go joking');
    }
    
    work(task) {
        console.log(`I work as ${this.job} i do ${task}`);
    }
}


class Programmer extends Person {
    lang

    constructor(name, age, job, lang) {
        super(name, age, job)

        this.lang = lang;
    }


    writeCode() {
        console.log(`im writing code using ${this.lang} language of programming`);
    }
}


let Petro = new Person('Petro', 40, 'mehanic');

console.log(Petro);

Petro.go('home');

Petro.run();

Petro.talk('cars');

Petro.work('fix car');

let Pavlo = new Programmer('Pavlo', 30, 'programmer', 'JavaScript');

console.log(Pavlo);

Pavlo.go('home');

Pavlo.run();

Pavlo.talk('cars');

Pavlo.work('fix bugs on prod');

Pavlo.writeCode()

