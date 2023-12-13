import './App.css';

import Header from './semantic/Header';
import Footer from './semantic/Footer';


import { Outlet } from 'react-router-dom';

// import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <div>
        <a href='./components/User'> User </a>
      </div> */}
      {/* <User/> */}
      {/* <Outlet/> */}

      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
