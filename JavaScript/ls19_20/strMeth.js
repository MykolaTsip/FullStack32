// let a = 'об\'єкт';
// let b = 'об\'є\nкт';

// console.log(a);
// console.log(b);

// console.log(a.length);



let st =   ' 111 434r sdfs sdfsdf FJFJFJFJF'   // new String('111 434r sdfs sdfsdf');
// console.log(st);
console.log(st.split(' '));

console.log(st.trim());

console.log(st.toLocaleUpperCase());

console.log(st.toLocaleLowerCase());

let a = st.charAt(10);
console.log(a);

let a1 = st.charCodeAt(4);
console.log(a1);

console.log('б'.charCodeAt(0));


console.log(st.includes('x'));

let c = st.concat(' Hello world')
console.log(st + ' Hello world');
console.log(c);

let d = st.search('sdfs');
console.log(d);

let e = st.startsWith(' 111');
console.log(e);
let f = st.endsWith('F')
console.log('F');

let s = st.indexOf('s');
console.log(s);
let se = st.lastIndexOf('s')
console.log(se);

let ss = st.replace('FJFJFJFJF', 'ello world');
console.log(ss);