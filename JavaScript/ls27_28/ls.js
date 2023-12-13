


// console.log(2222);

// let a  = prompt('ddd'); 

// // prompt(), confirm(), alert()


// console.log(3333);


// console.log(a);


// console.log(11111);

// setTimeout(() => console.log(22222), 5000);

// // setInterval(() => console.log('Interval'), 1000)

// // setTimeout(() => {
// //     let p = prompt('dddd');

// //     console.log(p);
// // }, 3000)

// setTimeout(() => console.log(4444), 3000)

// setTimeout(() => console.log(6666))

// console.log(33333);

// let num = 0;

// let myInterval = setInterval(() => {
//      console.log('data')
//      num++


//      if (num > 10) {
//         clearInterval(myInterval)
//     }
// }, 1000);

// console.log(myInterval);




let a  = [1, 4, 5, 8, 9];


// let bb = a.filter(e => e > 5)

// Backend
function clearHouse(isClear, cb) {
    setTimeout(() => {
        let reward = 500;

        if (isClear) {
            cb(null, reward)
        } else {
            cb('You should clear HOUSE!', 0)
        }
    }, 2000)
};


function byShort(money, cb) {
    setTimeout(() => {
        let shortPrice = 300;
    
    
        if (money >= shortPrice) {
            let rest = money - shortPrice;
    
            cb(null, rest)
        } else {
            cb('Money not enough !!!', money)
        }
    }, 1500)
};


function cafee(money, cb) {
    setTimeout(() => {
        let eatPrice = 100;
    
        if (money >= eatPrice) {
            let rest = money - eatPrice;
    
            cb(null, rest);
        } else {
            cb('You cant buy this meal!!!', money)
        }
    }, 1500)
};

// Frontend
clearHouse(true, (err, reward) => {
    // console.log(err, reward);
    if (err === null) {
        console.log('I get my reward ' + reward);

        byShort(reward, (errShort, rest) => {
            if (errShort === null) {
                console.log('I bought short, and i have ' + rest);

                cafee(rest, (errCafe, restCafe) => {
                    if (errCafe === null) {
                        console.log('My stomach is full!!! Im glad! I have ' + restCafe);

                    } else {
                        console.log('Shtm went wrong! ' + errCafe);
                    }
                })
            } else {
                console.log('Smth went wrong! ' + err1);
            }
        })
    } else {
        console.log('I havent money ' + err);
    }
})



