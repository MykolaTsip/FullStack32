// // Інкапсуляція
// // public, private, protected
class MackBook {
    model = '';
    RAM = 0;
    size = '';

    password = '';
    access = false;
    

    data = ' Mb';


    constructor (model, setPass) {
        this.model = model;
        this.password = setPass;

        if (this.model === 'Pro max') {
        
            this.RAM = 32;
            this.size = '17in';
        }
    }


    checkPass(pass) {
        this.access = this.password === pass;
    }

    setData(data) {
        this.data = data;
    }
}



let pro = new MackBook('Pro max', 1234);

console.log(pro);

pro.password = 0;


console.log(pro);



// // Поліморфізм
class Car {


    doWork() {
        console.log('im car, i drive');
    }
}

class SportCar extends Car {


    doWork() {
        console.log('im sport car, i go so fast');
    }
}

class ElCar extends Car {

    doWork() {
        console.log('im electro car, i go with economy energy');
    }
}

class Var extends Car {

    doWork() {
        console.log('im var, i go with weight');
    }
}


new Car().doWork();
new SportCar().doWork();
new ElCar().doWork();
new Var().doWork();

