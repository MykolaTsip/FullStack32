import { useState, useEffect, useLayoutEffect, useContext, useId, useRef, useReducer, useCallback, useMemo } from 'react';

import Lorem from './Lorem';


export function User (props) {
    // const [user, setUser] = useState(props);
    // const addAge = () => setUser({...user, age: user.age + 1});

    // return (
    //     <div>
    //         <div>id: {user.id}</div>
    //         <div>name: {user.name}</div>
    //         <div>age: {user.age} </div>
    //         <div>username: {user.username}</div>
    //         <div>email: {user.email}</div>

    //         <button onClick={addAge}> Add 1 year </button>
    //         <button onClick={setTwo}> SET 2 </button>
    //     </div>
    // )

    const rand = useId();

    console.log(rand);

    const getUserName = useRef()

    const { email } = props;


    const [age, setAge] = useState(props.age);
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    // const [email] = useState(props.email);

    useEffect(() => {
        console.log('Component did mount && update when age CHANGED');

        return () => console.log('Component will UNMOUNT');
    }, [age])


    useEffect(() => {
        console.log('Did mount & update when ID CHANGED');
    }, [id])

    useEffect(() => {
        console.log('Did mount & update when ANY changed');
        console.log(getUserName.current.innerText);

        return () => console.log(2222);
    }, [name])

    const addAge = () => setAge(age+1);

    const setTwo = () => setAge(2);


    const setIdFun = useCallback((rand) => setId(rand), [rand]);
    const setNameFun =  useMemo((rand) => setId(rand), [rand])

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>age: {age} </div>
            <div ref={getUserName}>username: {props.username}</div>
            <div>email: {email}</div>

            <button onClick={addAge}> Add 1 year </button>
            <button onClick={setTwo}> SET 2 </button>
            <button onClick={() => setIdFun(1)}> Set random ID </button>
            <button onClick={() => setId(4)}> Set rand name </button>
            { setNameFun }
            <hr/>
            <Lorem/>
        </div>
    )
}