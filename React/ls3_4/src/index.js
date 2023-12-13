import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Perr from './Person';

let cc = React.createElement('div', null, 'dg ddfg dfgdfgdf h')

const a = {
  d: 444,
  g: 444,
  vv: 'fgfgf'
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     {/* <React.StrictMode> */}
      {/* <div>
         Hello world
  
        { cc }
  
        <div>
          {a.d} - {a.g} - {a.vv}
        </div>
      </div> */}
  
      {React.createElement(App)}
      <App/>
      <Perr data="dfdgd" f={a.g}> <div> dfjklsdjlfs </div> </Perr>
      <hr/>
      { cc }
    {/* </React.StrictMode> */}
  </div>
);




