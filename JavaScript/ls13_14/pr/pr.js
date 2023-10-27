function returnValue (num) {
    if (typeof(num) === 'number' && num) {
        return num
    } else {
        return 0;
    }
}

let nFromP = Number(prompt('Enter number'));

let myNumb = returnValue(nFromP)

document.write(myNumb)