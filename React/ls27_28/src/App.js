import Minus from './counter/Minus';
import Plus from './counter/Plus';
// import Minus from './counter/Minus';

import { Users } from './Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <Minus/>
      <hr/>

      <hr/>
      <Plus/>

      <hr/>
      <Users/>

    </div>
  );
}

export default App;
