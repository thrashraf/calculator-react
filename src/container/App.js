import './App.scss';
import { Mode } from '../components/mode/Mode';
import { Digit } from '../components/digit/Digit';
import { Operation } from '../components/operation/Operation';
import React, { useState } from 'react';

function App() {

  const [val, setVal] = useState('');

  const getVal = e => {

    const newValue = e.target.value

    if (newValue === 'C') {
      setVal('');
    } else if (newValue === '=') {
      setVal(eval(val))
    } else if (newValue === 'DEL') {
      setVal(val.slice(0, -1))
    } else {
      setVal(val+ newValue)
    } 
  }

  return (
    <div className="App">
      <header>
      <span>{val === '' ? 0 : val}</span>
      </header>
      <section>
        <div className="mod-dig">
          <Mode getVal={getVal} />
          <Digit getVal={getVal}/>
        </div>
        <Operation getVal={getVal}/>
      </section>
      
    </div>
  );
}

export default App;
