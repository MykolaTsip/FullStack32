
let usd, eur;

let div = document.getElementById('us');


// fetch('https://jsonplaceholder.typicode.com/users').then(data => {

// // return data.text()
// // return data.json()
// // return data.blob()

// return data.json();
// }).then(users => {

//     for (let user of users) {
//         let userDiv = document.createElement('div');

//         userDiv.innerText = `${user.id}. ${user.name} - ${user.username}.       Phone: ${user.phone}`;
//         div.appendChild(userDiv);
//     }
    
//     console.log(users)
// })


// let reqUsers = new XMLHttpRequest();
// console.log(reqUsers);
// reqUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');

// reqUsers.send();

// reqUsers.onload = () => {
//     // console.log(reqUsers.response);
//     let users = JSON.parse(reqUsers.response)
//     console.log(users);

    
//     for (let user of users) {
//         let userDiv = document.createElement('div');

//         userDiv.innerText = `${user.id}. ${user.name} - ${user.username}.       Phone: ${user.phone}`;
//         div.appendChild(userDiv);
//     }
// }

// async function dd () {
//     let data = await reqUsers.send();
//     console.log(data);
// }
// dd()
// console.log(data);