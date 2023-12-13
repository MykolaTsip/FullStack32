
// // 1 create + add
// let nonSort = document.getElementById('nonSort');
// let sorted = document.getElementById('sorted');
// let ul = document.createElement('ul');


// let str = ['ddd', 'ffff', 'aaaaaa', 'bbb']

// for (let i = 0; i < 4; i++) {
//     let li = document.createElement('li');

//     li.innerText = str[i];
//     ul.appendChild(li);
// }


// nonSort.appendChild(ul);

// // 2 get + sort
// let list = document.getElementsByTagName('li')
// console.log(list);


// console.log(str.sort());
// let arr = [...list];

// let sortedArray = arr.sort((a, b) => {
//     let a1 = a.innerText[0].charCodeAt() 
//     let a2 = b.innerText[0].charCodeAt()
//     return a1 - a2;

// });


// // add
// let ol = document.createElement('ol');

// sortedArray.forEach(el => {
//     ol.appendChild(el);
// });

// sorted.appendChild(ol);



let dd = document.getElementById('nonSort');

let sorted = document.getElementById('sorted');

console.log(dd);

// dd.onclick(() => {
//     sorted.style.backgroundColor = 'red'
// })

dd.onclick = () => {
    console.log('nonSort clicked', sorted.style.backgroundColor);
    if (sorted.style.backgroundColor === 'red') {
        sorted.style.backgroundColor = 'green';
    } else {
        sorted.style.backgroundColor = 'red';
    }
}

// let nonC = document.getElementsByClassName('nonCopy');

// nonC[0].oncopy = (event) => {
//     // console.log(event, event.value);
//     // console.log('ffff');
//     // alert()

//     return false;
// }

// document.getElementById('im').oncopy = () => {
//     return false
// }



let ggg = document.getElementById('ggg');

// ggg.onmousedown = function (e) {
//     console.log(333);
//     ggg.style.backgroundColor = 'red';
// }

// ggg.onmouseup = () => {
//     ggg.style.backgroundColor = 'green';
// }


let img = document.getElementById('im');

// img.onmousemove = (event) => {
//     console.log(event);
//     console.log('move');
// }

// img.onmouseleave = (ev) => {
//     console.log(444, ev);
// }

// img.onmouseenter = () => {
//     console.log('enter');
// }

// img.onmouseover = () => {
//     console.log(222);
// }


// img.onkeydown = () => {
//     console.log('333');
// }

// document.body.onscroll = () => {
//     console.log(333);
// }


// function byClickLogT() {
//     console.log('sdngjksdbgsk');
// }

// let lisener = document.getElementById('lisener');

// lisener.addEventListener('click', () => {
//     lisener.innerText = 'FKSKFDFNKF'
// })


// let k1 =  document.getElementById('k1');
// let k2 =  document.getElementById('k2');
// let k3 =  document.getElementById('k3');


// k1.addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('k1 red');
// }, true)


// k2.addEventListener('click', (event) => {
//     // event.stopPropagation()
//     console.log('k2 green');
// }, true)

// k3.addEventListener('click', () => {
//     console.log('k3 yellow');
// }, true)


let sub = document.getElementById('sub');

sub.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(3333);

    // document.forms.myForm
    console.log(document.forms.myForm);
    // console.log(document.forms.MmF);

    let newUser = {
        name: document.forms.myForm.name.value,
        pass: document.forms.myForm.password.value,
        phone: document.forms.myForm.phone
    }

    console.log(newUser);
})


let ii = document.getElementById('inn');
let tt = document.getElementById('tt');

// ii.onchange = (event) => {
//     console.log(event, event.target.value);

//     tt.innerText = event.target.value;
// }


// ii.oninput = (event) => {
//     console.log(event, event.target.value);

//     tt.innerText = event.target.value;
// }


