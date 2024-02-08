import React, {Fragment, createContext, useState} from 'react'
import { useOnline } from './hooks/onlineState';

import { Text, TextClass } from './components';

import './App.css';

export const Counert = createContext();

function App() {

  const [count, setCount] = useState(0);
  const isItOnline = useOnline();

  console.log(isItOnline, 'online');

  return (
    <Fragment>
      <div> Check online person: { String(isItOnline) } </div>
        <div>
          <button onClick={() => setCount(count+1)}> Incriss </button>
          <button onClick={() => setCount(count-1)}> Decriss</button>

        </div>
        GLFMG;km kmkmfkkl
        <span>
          dslgmkpsmfgp
        </span>
        <hr />

        <Counert.Provider value={count}>
          <Text/>
          <hr/>
          <TextClass/>
        </Counert.Provider>

    </Fragment>
  );
}

export default App;
