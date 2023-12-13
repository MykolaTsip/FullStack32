
let inputEl = document.getElementById('isClear');
let butnEl = document.getElementById('check');


butnEl.onclick = () => {
    let val = inputEl.value.toLowerCase() === 'true' || inputEl.value.toLowerCase() === 'yes' ;
    let dataEl = document.getElementById('data');

    clearCar(val, (err, reward) => {
        if (err) {
            let resErr = `You have error: ${err}. You reward: ${reward}`;
            console.log(resErr);
            dataEl.innerHTML = resErr;
        } else {
            let res = `You have reward ${reward}`;
            console.log(res);
            dataEl.innerHTML = res
        }
    })
};



function clearCar(isClear, cb) {
    let reward = 200;
    let noReward = 0
    let err = 'you should clear CAR!!!'

    if (isClear) {
        cb(null, reward);       
    } else {
        cb(err, noReward)
    }
}