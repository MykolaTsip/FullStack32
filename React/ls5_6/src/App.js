import React from 'react';
import './App.css';

import Header from './semantic/Header';
import Content from './semantic/Content';
import Footer from './semantic/Footer';

import Counter from './counter/Counter';

function App() {
  const nameClassOfFoot = 'footer';

  return (
    <div>
      {React.createElement(Header)}
      <Content/>
      <Footer className={nameClassOfFoot}> IT IS FOOTER </Footer>
      <hr/>

      <Counter/>
    </div>
  );
}

export default App;
