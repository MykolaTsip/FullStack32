

// let err = new Error('rrrr');
// let tErr = new TypeError('dsgmsdkgs')


// console.clear()
// console.log('dsfdsfsd');
// console.info('sdgksgksklfgklfdgdfl');
// console.count('dgsgsf')
// console.count('sdfds')
// // console.time('dsgsdgsd')
// console.warn('dsgsd')


// console.assert(false, {a: 1})
// console.error('dsgmsdkgmkfd')

// throw err


setTimeout(() => console.log(1), 1);

setTimeout(() => console.log(2), 0);

 let a = new Promise((resolve) => resolve(3)).then(d => console.log(d));

 async function f () {
    await a;
    console.log(4);
 }
 f()

