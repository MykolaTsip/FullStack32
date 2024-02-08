import { useState, useEffect } from 'react'

import {fetchUsers, fetchUsers1, axiosUser} from '../services/user.service'; 

// const url = 'https://jsonplaceholder.typicode.com/';

function Users () {
    const [users, setUsers] = useState([])

    // const fetch = () => {
    //     // fetch(`${url}/users`)
    //     // .then(data => data.json())
    //     // .then(usersF => setUsers(usersF));

    //     fetchUsers().then(data => data.json())
    //     .then(usersF => setUsers(usersF));
    // }

    // const ft = async () => {
    //     const ftU = await fetchUsers1();
    //     setUsers(ftU)
    // }

     const ax = () => {
        // fetch(`${url}/users`)
        // .then(data => data.json())
        // .then(usersF => setUsers(usersF));

        axiosUser()
        // .then(data => data.json())
        .then(({data}) => { console.log(data); setUsers(data)});
    }

    

    useEffect(() => {
        // fetch()
    }, [users])

    return (
        <div>
            <button onClick={ax}> Show all users </button>
            <hr/>
            { users.length > 0 && users.map((u, i) => <div key={i}> {u.id} - {u.name} - {u.email}  </div>) }
        </div>
    )
}

export default Users;