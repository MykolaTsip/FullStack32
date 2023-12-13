
let root = document.getElementById('root');
root.style.display = 'flex';
root.style.justifyContent = 'space-around'

// for (let i = 1; i <= 4; i++) {
//     let kub = document.createElement('div');


//     kub.style.width = '100px';
//     kub.style.height = '100px';
//     kub.style.border = '2px solid red';

//     root.appendChild(kub);
// }




// let numOfC = Number(prompt('Enter num'));

// if (Number.isInteger(numOfC)) {
//     for(let i = 1; i <= numOfC; i++) {
//         let r = Math.round(Math.random() * 256);
//         let g = Math.round(Math.random() * 256);
//         let b = Math.round(Math.random() * 256);


//         let cycle = document.createElement('div');
//         cycle.classList.add('cy');
//         cycle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//         root.appendChild(cycle)
//     }
// } else {
//     alert('Its not number !!')
// }

// let cylses = document.getElementsByClassName('cy');

// setInterval(() => {
//     for (let el of cylses) {
//         console.log(el.style.marginTop);
//         el.style.marginTop = addMargin(el.style.marginTop)
//     }
// }, 2000);


// function addMargin(val) {
//     let num = ''
//     for (let sym of val) {
//         if (Number.isInteger(Number(sym))) {
//             num = num + sym;
//         }
//     }

//     return Number(num) + 10 + 'px';
// }



let wid = +prompt('Enter width');
let hei = +prompt('Enter height');
let colo = prompt('Enter color');
let tex = prompt('Enter text');


let el = document.createElement('div');

el.innerHTML = tex;
el.style.width = wid + 'px';
el.style.height = hei + 'px';
el.style.backgroundColor = colo;

root.appendChild(el);