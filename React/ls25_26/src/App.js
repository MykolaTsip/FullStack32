// import { useState } from 'react'


import Plus from './Minus';
import Minus from './Plus';
import Data from './Data';


import './App.css';

function App() {


  // const [cout, setCou] = useState(0);


  return (
    <div className="App">
        <h2>
          Counter
        </h2>

        {/* <button onClick={() => setCou(cout+1)}> + </button>
        {cout}
        <button onClick={() => setCou(cout-1)}> - </button> */}


        <Plus/>
        <Data/>
        <Minus/>

    </div>
  );
}

export default App;
