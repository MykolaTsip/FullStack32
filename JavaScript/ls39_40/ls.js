

// DOM = Document Object Modal

document.write('dfmdfm <br> <i> Hello </i>');
document.write('<div>MSKNF</div>')

// prompt confirm alert

// console.log(2222);

// console.log(document.body);
// console.log(document.body.hr);
console.log(document);

let h2 = document.getElementsByTagName('h2')
console.log(h2);


let byCl = document.getElementsByClassName('myClass')
console.log(byCl);

// let bN = document.getElementsByName('inp')
// console.log(bN);

let idd = document.getElementById('uniq');
console.log(idd);


let sel = document.querySelector('h2');
console.log(sel);

let sbi = document.querySelector('#uniq')
console.log(sbi);


let a = document.querySelector('input[type="text"]');
console.log(a);

let b = document.querySelectorAll('h2');
console.log(b);


let kub = document.getElementsByClassName('kub') // document.querySelector('.kub')

console.log(kub);

// kub[0].style.width = '100px';
// kub[0].style.height = '100px';
// kub[0].style.margin = '15px';
// kub[0].style.backgroundColor = 'blue';



// setInterval(() => {
//     for (let el of kub) {
//         let red = Math.round(Math.random() * 256);
//         let green = Math.round(Math.random() * 256);
//         let blue = Math.round(Math.random() * 256);
    
    
//         el.style.width = '50px';
//         el.style.height = '50px';
//         el.style.margin = '15px';
//         el.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     }
// }, 2000)

let numOfKubs = +prompt('Enter number');

let elK = document.getElementById('jsKubs');
elK.style.display = 'flex';


for (let i = 1; i <= numOfKubs; i++) {
    let textOfKub = prompt(`Enter message for kub ${i}`);
    let newKub = document.createElement('div');

    let red = Math.round(Math.random() * 256);
    let green = Math.round(Math.random() * 256);
    let blue = Math.round(Math.random() * 256);

    // newKub.style.width = '100px';
    // newKub.style.height = '100px';
    // newKub.style.margin = '15px';
    newKub.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // newKub.innerText = textOfKub; <h2>dfks </h2> => <h2>dfks </h2>
    newKub.innerHTML = textOfKub; // <h2>dfks </h2> => DFKS
    newKub.classList.add('setK')
    newKub.id = 'rrr'
    

    elK.appendChild(newKub);
}
