import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React Calculator</h2>
      <ButtonPanel />
      <Display />
    </div>
  );
}

export default App;
