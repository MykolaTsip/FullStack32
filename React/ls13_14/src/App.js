import './App.css';

import React, { useState, createContext } from 'react';

import { User, Counter } from './components';

import { users as allUsers} from './constants';


export const Lor = createContext('Lorem');

function App() {

  // React.useState

  // React.createContext

  const [users, setUsers] = useState(allUsers);

  
  const isShowUser = (user) => {
  
    user.isShow = !user.isShow;

    setUsers(users.map(userL => { 
      if (userL.id === user.id) return user
      return userL
    }))
  }

  return (
    <div className="">
      <h3> Users list</h3>
      <button onClick={() => setUsers(users.map(u => {u.age = 18; return u}))}> Set all users age 18 </button>
      <hr/>

      <Lor.Provider value='Lorem ipsum'>
        { users.map((user, i) => (
          <div key={i}>
            <div> User with id: {user.id} </div>

            <button onClick={() => isShowUser(user)}> { user.isShow ? `Hide ${user.name}` : `Show ${user.name}` } </button>

            { user.isShow && <div> <User {...user}/> </div>}
            <hr/>
          </div>)) }
      </Lor.Provider>

      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
