import { useState } from 'react';

import { styleForForm, styleForError, userFields, USER_ENUM } from '../constants';

function FormCar () {
 
    const fieldRandCar = ($evet) => {
        console.log($evet);
    }

    const [user, setUser] = useState(userFields);

    const submitFirstF = () => {
        console.log(3333);
    }


    const changeUser = ({value}, field)  => {
        // console.log(value.target.toched, field);

        setUser({...user, [field]: value, isTouched: true});
        // console.log(user);
    }

    const validateUserBnt = () => {


        return !(user[USER_ENUM.NAME] && user[USER_ENUM.PASS] && user[USER_ENUM.REPASS] && (user[USER_ENUM.PASS] === user[USER_ENUM.REPASS]))
    }

    // const nameOfF = (e) => {
    //     console.log(e.target.value);
    //     setUser({...user, name: e.target.value})
    // };

    // const passOfF = (e) => {
    //     console.log(e.target.value);
    //     setUser({...user, pass: e.target.value});
    // }

    // const repassOfF = (e) => {
    //     console.log(e.target.value);
    //     setUser({...user, repass: e.target.value});
    // }
    
    
    return (
    <div>
        <input placeholder="Random car" onChange={(e) => fieldRandCar(e)}/>


        <form style={styleForForm}  
        // onSubmit={submitFirstF}
        >
            <label htmlFor="name"> Name: </label>
            <input onChange={(e) => changeUser(e.target, USER_ENUM.NAME)} id='name' placeholder='name'/>
            { !user[USER_ENUM.NAME] && user.isTouched && <p style={styleForError}> You should put name </p> }
            <hr/>

            <label htmlFor="pass"> Password: </label>
            <input onChange={(e) => changeUser(e.target, USER_ENUM.PASS)} id='pass' placeholder='Password' />
            { !user[USER_ENUM.PASS] && user.isTouched && <p style={styleForError}> You should put PASS </p> }
            <hr/>

            <label htmlFor="repass"> Repeat password: </label>
            <input onChange={(e) => changeUser(e.target, USER_ENUM.REPASS)} id='repass' placeholder='repeat pass' />
            { !user[USER_ENUM.REPASS] && user.isTouched && <p style={styleForError}> You should put REPEAT PASS </p> }
            { user[USER_ENUM.REPASS] && user.isTouched !== user[USER_ENUM.PASS] && <p style={styleForError}> You should put the same PASS </p> }
            
            <hr/>

            {/* <input type='submit' value="Send data" /> */}

            <input
                type='button'
                value="Send data" 
                disabled={validateUserBnt()}
                onClick={submitFirstF}/>
            {/* <input type='submit' value="Send data" onClick={submitFirstF}/> */}

      </form>
      <hr/>

      {  
        user[USER_ENUM.NAME] && 
        user[USER_ENUM.PASS] &&
        user[USER_ENUM.REPASS] &&
        <div> User created: <b> { user[USER_ENUM.NAME] } - { user[USER_ENUM.PASS] } - { user[USER_ENUM.REPASS] }; </b></div>
      }

    </div>
    )
}

export default FormCar;