

// for (let i = 1; i <= 100; i++) document.write(i + ' <br>');

// if (5 < 6) console.log(222);

// for (let i = 100; i > 0; i -= 1) {
//     document.write('<h3>' + i + '</h3>')
// }


let message = prompt('Enter you number (i will make factorial n!)');

let num = Number(message);


if (num) { // NaN || 0
    let endNum = 1

    if (num < 0) {
        num =  0 - num;
    }

    for (num; num > 0; num--) {
        endNum *= num;
    }
    document.write('<h4>' + endNum + '</h4>')

} else if (num === 0) {
    document.write('You entered 0');
} else {
    document.write('You entered symbol! No number!')
}