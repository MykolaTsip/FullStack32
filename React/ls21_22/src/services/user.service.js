import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/';


export const fetchUsers = () => {
    // const users = []
    fetch(`${url}/users`)
    // .then(data => data.json())
    // .then(usersF => setUsers(usersF));
}

export const fetchUsers1 = () => {
    let users = [];
    fetch(`${url}/users`)
    .then(data => data.json())
    .then(usersF => {users = usersF});

    return users
}

export const axiosUser = () => {
    return axios.get(`${url}/users`);
}