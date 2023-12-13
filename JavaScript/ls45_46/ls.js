

// document = DOM = Document Object Modal
// console.log(document);

// window = BOM = Browser Object Modal
// console.log(window);

// var a = 400;
// var abcc = 'dsgsdg'

let b = {
    a: 3,
    b: () => console.log(this.a)
}
 

let c = Object.assign({}, b);

// b = undefined;

// c.b();

// let name = ''

// class A {
//     name

//     f () {
//         this.name = lds;s
//     }
// }


// console.log(this);

// // 

// console.log(
//     window.navigator
// );

// window.console.log()


// navigator.getBattery().then(val => console.log(val));

// console.log(navigator.language, navigator.languages);

// navigator.


// console.log(location);
// location.href = 'https://github.com/';
// setTimeout(() => location.reload() ,1000);

// navigation.navigate('https://answers.microsoft.com/en-us/windows/forum/all/fgsdf/f6eb5da6-48d0-4d3c-b2c5-cb3beae1e8ef')

// navigator.geolocation


// navigator.geolocation.getCurrentPosition((data) => {
//     console.log(data)
// })


// let vid = document.getElementById('vid');

// navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(val => {
//     console.log(val);

//     vid.srcObject = val;

//     vid.play()
// })


// console.log(window.history);


let o = {
    d: 44,
    f: 'dgs',
    ff: {
        k: 10
    }
}


let arr = [1, 3, 4, [55, 6]]

// let aa = {...o}
// let arrC = [...arr]

// // let nn = [...o]

// console.log(aa);
// console.log(arrC);

// aa.f = true
// aa.ff.k = true
// console.log(o, aa);



// let cv = {
//     rrr: 1,
//     rt: '333',
//     d: true,
//     ...o,
// }

// console.log(cv);


// let aaee = [1, 4, ...arr, 1111]
// console.log(aaee);


// function f(...arguments) {
//     console.log(arguments);
// }


// let ad = (...rest) => {
//     console.log(rest);
// }


// ad(1, 3, 4, 5, 6, 66,7, 'gdfgd', true)

// Деструктиризація



// let formM = document.forms.myForm;

let obj = {
    name: 'fgf',
    age: 33,
    isCar: true,
    job: {
        position: 'dsgs',
        salary: 'ddd',
        location: 'dgsgsg',
        career: {
            a: 1
        }
    }
}

    // let name = obj.name;
    // let age = obj.age;
    // let position = obj.job.position

    // function a (num = 0) {
    //     console.log(num);
    // }

    // a();
    // a(11)

    let age = 0;

let { name, age: age2, job: {position, career: {a}}, wife = false } = obj;

console.log(name, age, position, wife);


let arr2 = ['fgf', 33, true, ['dsgs', 'ddd', 'dgsgsg', [1]]]


let [name1, aa2, , [text, , , [num1, num2 = 0]]] = arr2

console.log(name1, aa2, text, num1, num2);
