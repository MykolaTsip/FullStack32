import { Component } from 'react';

import './App.css';

import { User } from './components';

import { users } from './constants'

class App extends Component {

  state = {users: users};

  isShowUser = (user) => {
    // let indOfUser = this.state.users.indexOf(user);
    // console.log(indOfUser);
    // this.setState((st) => ({users: st.users.splice(indOfUser, 1, user)}))
  
    user.isShow = !user.isShow;

    this.setState((st) => ({users: st.users.map(userL => { 
        if (userL.id === user.id) return user
        return userL
     })}))
  }

  render () {
    const { users } = this.state

    return (
      <div className="">
        <h3> Users list</h3>
        <button onClick={() => this.setState({users: this.state.users.map(u => {u.age = 18; return u})})}> Set all users age 18 </button>
        <hr/>

        { users.map((user, i) => (
          <div key={i}>
            <div> User with id: {user.id} </div>

            <button onClick={() => this.isShowUser(user)}> { user.isShow ? `Hide ${user.name}` : `Show ${user.name}` } </button>

            { user.isShow && <div> <User {...user}/> </div>}
            <hr/>
          </div>)) }
      </div>
    );
  }
}

export default App;
