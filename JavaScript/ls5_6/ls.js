// let isTeach = confirm('Are you techer or student?');

// console.log(isTeach);

// if (isTeach) {
//     document.write('<h1> You have lesson </h1>')
//     console.log(34434);
//     console.log(34534534);
//     // if ()
// } else {
//     document.write('<h2> Relax </h2>')
// }


// isTeach 
//     ? 5 < 6 
//         ? document.write('<h1> You have lesson </h1>')
//         : console.log('dfsdf') 
//     : document.write('<h2> Relax </h2>');

// confirm('Are you techer or student?') ? document.write('<h1> You have lesson </h1>') : document.write('<h2> Relax </h2>');


// ===========


// for (let i = 0; i < 5; i++) {
//     document.write('<h2> Relax </h2>');
// }

// for (let i = 0; i < 300; i++) {
//     console.log(i)
// }

// let a = 1;

// for (let i = 10; i > 0; i--) {
//     // console.log(i);
//     a *= i
// }

// console.log(a);


// let a = 10;

// for (a; a > -10; a--) {
//     console.log(a);
// }


// =============


let students = [
    'Alla',
    'Наталя',
    'Дaниїл',
    'Катерина',
    'Максим',
    'Євген',
    'Максим',
    'Святослав',
    'Дана',
    'Алан',
];


// document.write('<h3> Привіт ' + students[0] +  '</h3>')
// document.write('<h3> Привіт ' + students[1] +  '</h3>')
// document.write('<h3> Привіт ' + students[2] +  '</h3>')

console.log(students.length, students[8], students);
               // 9     // 10
for (let i = 0; i < students.length; i++) {
    console.log('<h3> Привіт ' + students[i] +  ' </h3>');
    document.write('<h3> Привіт ' + students[i] +  ' </h3>')
}




