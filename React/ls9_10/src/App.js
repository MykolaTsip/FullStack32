import React from 'react';

import './App.css';

// import MyC1 from './components/Component';
// import DKCKD, { Person, Comp, a }  from './components/Peson';
// import {Content} from './components/Content';


import Errr, {Comp, Person, CompPerson, a, Content, Content2} from './components';

import Wrap from './content/Wrapper';


import Phone from './prop/Phone';


const phone = [
  {},
  {name: 'Xiomi', model: 'Note 12', memory: 8, cpu: 8 },
  {name: 'Iphone', model: '12', memory: 8, cpu: 8 },
  {name: 'Samsung', model: 'Note 12', memory: 10, cpu: 8 },
  {name: 'Oppo', model: ' dfnsd2', memory: 6, cpu: 6 }
]

function App() {

  console.log(a());
  // console.log(DKCKD());

  return (
    <div >
     
     <CompPerson></CompPerson>
     <hr/>
     <Person></Person>
     <hr/>
     <Comp/>
     <hr/>
     <Content/>
     <hr/>
     <Content2/>
     <Errr></Errr>

     <hr/>
     <hr/>
     <hr/>

    <Wrap/>

    <hr/>

    {/* <Phone /> */}

    { phone.length > 0 && phone.map(({name, model, memory, cpu}, i) => <Phone key={i} name={name}  model={model} memory={memory}  cpu={cpu} />) }
    {/* { phone.map((val, i) => <Phone props={val} />) } */}

    {/* { phone.map(({name, model, memory, cpu}, i) => <Phone key={i} name  model memory  cpu />) } */}

    {/* <Phone props={phone[1]}/> */}

    </div>
  );
}

export default App;
