import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux';

import { plus, minus, asyncSetZero} from './store/slice/counter';
import { getAsyncUser } from './store/slice/user';


import { store } from './store';

function App() {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  // store.subscribe(() => {
  //   console.log(store.getState(), 3453453);
  // })

  console.log(state);

  return (
    <div className="App">
        <h3> Count is: {state.counter} </h3>
        <button onClick={() => dispatch(plus())}> Plus </button>
        <button onClick={() => dispatch(minus())}> Minus </button>
        <button onClick={() => dispatch(asyncSetZero())}> Set zero after 2 sec </button>


        <hr/>
        <button onClick={() => store.dispatch(plus())}> dgf fdg</button>
        <hr/>
        <button onClick={() => dispatch(getAsyncUser())}> get user </button>

        { state.users?.map((user, i) => (
          <div key={i}> {user.id} - {user.name} - {user.email} </div>
        )) }

    </div>
  );
}

export default App;
