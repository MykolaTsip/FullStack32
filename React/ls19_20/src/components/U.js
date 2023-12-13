import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'

import { users } from '../constants';

let a = [];

function U() {

    const par = useParams();
    const loc = useLocation();

    useEffect(() => {
        console.log(loc);
        console.log(par);
      const a = users.find((val) => val.id === Number(par.id));

      console.log(a);
    })


    const addAge = () => {
        // this.setState((st) => ({age: st.age + 1}));
    }

    const setTwo = () => {
        // this.setState((st) => ({age: 2}));
    }

        return (
            <div>
                <div>id: {a.id}</div>
                <div>name: {a.name}</div>
                <div>age: {a.age} </div>
                <div>username: {a.username}</div>
                <div>email: {a.email}</div>

                <button onClick={addAge}> Add 1 year </button>
                <button onClick={setTwo}> SET 2 </button>
            </div>
        )

}

export default U;