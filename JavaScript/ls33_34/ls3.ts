// // Інкапсуляція
// // public, private, protected, readonly
class MaclBook {
    private model = '';
    public RAM = 0;
    size = '';

    private password = '';
    private access = false;
    

    data = ' Mb';


    constructor (model, setPass) {
        this.model = model;
        this.password = setPass;

        if (this.model === 'Pro max') {
        
            this.RAM = 32;
            this.size = '17in';
        }
    }


    public checkPass(pass) {
        this.access = this.password === pass;
    }

    public setData(data) {
        this.data = data;
    }

    protected getData() {
        return this.data;
    }
}



let pro = new MaclBook('Pro max', 1234);

console.log(pro);

// pro.password = 'fdssdsf';
// pro.password = 'dfdsdffsdd'

// console.log(pro.getData());



console.log(pro);
console.log(pro.RAM);



class Watch extends MaclBook {

    logData () {
        console.log(super.getData());

        console.log(this.RAM);
        
    }
}
