import React, { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(8);

  const increment = () => {
    let newNumber = number + 8;
    setNumber(newNumber);
  }

  const reset = () => {
    setNumber(8);
  }

  return (
    <div className="App">
      <header>
        {number}
      </header>
      <button onClick={increment}>Increment By 8</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;