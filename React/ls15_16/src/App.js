
import { useRef, useState } from 'react';

import { styleForForm } from './constants';

import FormCar from './components/FormCar';

import './App.css';

function App() {

  const [user, setUser] = useState({name: '', pass: '', repass: ''});

  const someInput = useRef();

  const myFirstF = useRef();

  const renderSomeInp = () => {
    console.log(someInput);
    console.log(someInput.current.value);
  }

  const submitFirstF = () => {
    console.log(myFirstF);

    // console.log(myFirstF.current[0].value);
    setUser({
      name: myFirstF.current[0].value,
      pass: myFirstF.current[1].value,
      repass: myFirstF.current[2].value
    });
  }

  return (
    <div className="App">
      <input ref={someInput} id='dsd'/> <button onClick={renderSomeInp}>Out put in log</button>


      <form style={styleForForm} ref={myFirstF} 
        // onSubmit={submitFirstF}
        >
        <label htmlFor="name"> Name: </label>
        <input id='name' placeholder='name' />
        <hr/>

        <label htmlFor="pass"> Password: </label>
        <input id='pass' placeholder='Password' />
        <hr/>

        <label htmlFor="repass"> Repeat password: </label>
        <input id='repass' placeholder='repeat pass' />
        <hr/>

        {/* <input type='submit' value="Send data" /> */}

        <input type='button' value="Send data" onClick={submitFirstF}/>
      </form>

      <hr/>

      {  
        user.name && 
        user.pass &&
        user.repass &&
        <div> User created: <b> { user.name } - { user.pass } - { user.repass }; </b></div>
      }

      <hr/>

      <FormCar/>
    </div>
  );
}

export default App;
