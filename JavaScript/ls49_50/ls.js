// Backend
function clearHouse(isClear) {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            let reward = 500;

            if (isClear) {
                // cb(null, reward)
                resolve(reward);
            } else {
                // cb('You should clear HOUSE!', 0)
                reject('You should clear HOUSE!')
            }
        }, 2000))
};

function byShort(money) {
    return new Promise((rel, rej) => {
        setTimeout(() => {
            let shortPrice = 300;
        
        
            if (money >= shortPrice) {
                let rest = money - shortPrice;
                rel(rest)
                // cb(null, rest)
            } else {
                // cb('Money not enough !!!', money)
                rej('Money not enough !!!')
            }
        }, 1500)
    })
};


function cafee(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let eatPrice = 100;
        
            if (money >= eatPrice) {
                let rest = money - eatPrice;
        
                resolve(rest)
                // cb(null, rest);
            } else {
                reject('You cant buy this meal!!!')
                // cb('You cant buy this meal!!!', money)
            }
        }, 1500)
    })
};

// Frontend
// clearHouse(true, (err, reward) => {
//     // console.log(err, reward);
//     if (err === null) {
//         console.log('I get my reward ' + reward);

//         byShort(reward, (errShort, rest) => {
//             if (errShort === null) {
//                 console.log('I bought short, and i have ' + rest);

//                 cafee(rest, (errCafe, restCafe) => {
//                     if (errCafe === null) {
//                         console.log('My stomach is full!!! Im glad! I have ' + restCafe);

//                     } else {
//                         console.log('Shtm went wrong! ' + errCafe);
//                     }
//                 })
//             } else {
//                 console.log('Smth went wrong! ' + err1);
//             }
//         })
//     } else {
//         console.log('I havent money ' + err);
//     }
// })



// let a = [1, 2, 3, 4, 5, 6, 7];

// let b = a.join(' ').split(' ').map((d) => Number(d)).filter((val) => val > 4).find((val) => val === 7);
// console.log(b);


// let a = clearHouse(true)
// console.log(a);


// clearHouse(true).then((reward) => {
//     console.log('I get my reward ' + reward);
//     return byShort(reward);
// }).then(data => {
//     console.log('I bought short, and i have ' + data);
//     return cafee(data)
// }).then(rest => {
//     console.log('My stomach is full!!! Im glad! I have ' + rest)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => console.log('I finish my day!!!'))



// let allProm = Promise.all([clearHouse(true), byShort(500), cafee(300)])
// console.log(allProm);

// Promise.all([clearHouse(true), byShort(100), cafee(300)])
//     .then(arr => console.log(arr))
//     .catch(err => console.log(err));


// Promise.allSettled([clearHouse(true), byShort(100), cafee(300)])
// .then(data => console.log(data))

// Promise.race([clearHouse(true), byShort(500), cafee(300)])
// .then(data => console.log(data))



async function doDay () {
    try {
        // let isClear = clearHouse(true);
        // console.log(isClear);
    
        let reward = await clearHouse(true);
        console.log('I get my reward ' + reward);
    
        let restShort = await byShort(reward);
        console.log('I bought short, and i have ' + restShort);
    
        let restFood = await cafee(restShort);
        console.log('My stomach is full!!! Im glad! I have ' + restFood)
    } catch (err) {
        console.log(err);
    } finally {
        console.log('My day is finished');
    }


        // let isClear = clearHouse(true);
    // console.log(isClear);

    // try {
    //     let reward = await clearHouse(false);
    //     console.log('I get my reward ' + reward);
    // } catch (err) {
    //     console.log(err + ' Error house');
    // }

    // try {
    //     let restShort = await byShort(reward);
    //     console.log('I bought short, and i have ' + restShort);
    // } catch (err) {
    //     console.log(err + ' Error Shop');
    // }

    // try {
    //     let restFood = await cafee(restShort);
    //     console.log('My stomach is full!!! Im glad! I have ' + restFood)
    // } catch (err) {
    //     console.log(err + ' Error cafee');
    // }
       
}


doDay()



fetch('https://jsonplaceholder.typicode.com/users')
.then(data => {
    console.log(data)
    return data.json()
}).then(users => console.log(users))



