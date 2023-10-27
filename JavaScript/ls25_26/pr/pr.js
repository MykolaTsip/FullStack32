let dataNum = +prompt('Number')

let dataStr = prompt('String')
let dataStr2 = prompt('String 2')



// 1
if (dataNum > 0) {
    console.log('its +');
} else if (dataNum < 0) {
    console.log('its -');
} else {
    console.log('its 0');
}

// 2 
console.log(dataStr.length);
 

// 3 
let lSym = dataStr[dataStr.length -1];
console.log(lSym);

// 4
 if (dataNum % 2 === 0) {
    console.log('odd');
 } else {
    console.log('even');
 }

 // 5
//  let str1 = dataStr[0] + dataStr[1] + dataStr[2];
    let str1 = dataStr.slice(0, 2);
//  let str2 = dataStr2[0][1][2];

 if (dataStr2.startsWith(str1)) {
    console.log(true);
 } else {
    console.log(false);
 }

 // 6
 
 if (dataStr[dataStr.length -1] === 'ь') {
    console.log(dataStr[dataStr.length - 2]);
 } else {
    console.log(dataStr[dataStr.length -1]);
 }