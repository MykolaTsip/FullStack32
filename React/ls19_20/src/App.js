import './App.css';

import Header from './semantic/Header';
import Footer from './semantic/Footer';

import DefCont from './components/DefContent';
import User from './components/User';
import Error from './components/Error';
import AllU from './components/AllU';
import U from './components/U';



import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const importUser = () => import('./components/User').then(f => ({Component: f.default}))


const any = <div> Hellow feom any </div>;

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' Component={DefCont} />
          {/* <Route path='/user' lazy={importUser()} /> */}
          <Route path='user' Component={User} />
          {/* <Route path='user/:tt/:hello' Component={User} /> */}
          <Route path='users' Component={AllU}/>
          <Route path='users/:id' loader={async () => <div> AWAIT PLEASE </div>} Component={U}/>

          <Route path='any' element={any} />
          <Route path='*' element={<Error/>} />
          
        </Routes>

  

      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
