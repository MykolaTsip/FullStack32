
class Car {
    speed = 0
    lngh = '4m'
    heiht = '1.6m'
    marka
    nomer

    constructor(marka, nomer) {
        this.marka = marka;
        this.nomer = nomer ?? ''
    }


    drive(addedSped) {
        this.speed += addedSped;
    }

    stop() {
        this.speed = 0;
    }
}

let a = new Car('bmw');

console.log(a);


a.drive(60);
console.log(a);
a.drive(30);
console.log(a);
console.log(a.speed, a.heiht, a.lngh);
a.stop();
console.log(a);


let b = new Car('hundai', 'dfsdsd');
let c = new Car('honda', 'sdr4353');

console.log(b);
console.log(c);


class SportCar extends Car {
    topSpeed;

    constructor(marka, nomer, topSpeed) {
        super(marka, nomer)
        this.topSpeed = topSpeed ?? 600
    }


    get getSpeed () {
        return this.speed
    }

    set setSpeed (newSpeed) {
        if (newSpeed < this.topSpeed && newSpeed > 0) {
            this.speed = newSpeed
        }
    }
}


let bugatti = new SportCar('bugatti', 'ddd');

console.log(bugatti);

bugatti.drive(150)

console.log(bugatti);

console.log(bugatti.getSpeed);
bugatti.setSpeed = 300;
console.log(bugatti.getSpeed);
bugatti.setSpeed  = 1000;
console.log(bugatti.getSpeed);
