// алгоритми пошуку
// алгоритми сортування
 
// [3, 4, 5] // 3 = 3, 3 = 4, 4 = 5/  4 = 3, 4 = 4, 5 = 5/  3 = 3, 3 = 4, 4 = 5/



// Лінійний пошук

let arr = [
    {
        phone: 'Xiomi',
        price: 1000
    },
    {
        phone: 'Samsung',
        price: 1001
    },
    {
        phone: 'Iphone',
        price: 1002
    },
    {
        phone: 'Lenovo',
        price: 1003
    },
    {
        phone: 'Meizu',
        price: 1003
    }
]

let searchPh = 'Lenovo';

for (let i = 0; i < arr.length; i++ ) {
    if (arr[i].phone === searchPh) {
        document.write('I found!! ' + searchPh);
        break;
    }
}


// Бінарний пошук

let count = 0;

let arr2 = [2, 4, 5, 6, 7,  8,  10, 22, 543, 666, 777, 888, 999, 1000, 3543, 3999, 4444, 5555, 6666, 9999];

let sNum = 22;

let start = 0;
let end = arr2.length - 1;

let m;

let isFound = false;

while (!isFound && start < end) {
   ++count
   m = Math.round((start + end) / 2);

   if (arr2[m] === sNum) {
    console.log(arr2[m]);
    console.log(count);
    isFound = true
  } else  if (arr2[m] > sNum) {
    end = m - 1;
  } else if (arr2[m] < sNum) {
    start = 1 + m;
  }
}


// Сортування бульбашкою

let arr3 = [3, 1, 6, 2, 9, 5, 55, 33, 22, 56456, 4334];



for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
      if (arr3[j] > arr3[j + 1]) {

        let tmp = arr3[j];
        arr3[j] = arr3[j+1];
        arr3[j+1] = tmp;
      }
  }
}

console.log(arr3);




// ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

// [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

// [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15]


// ['apple', 'black', 'Myk', 433, 23]