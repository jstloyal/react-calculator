import React from 'react';
import ButtonPanel from '../button-panel/ButtonPanel';
// eslint-disable-next-line
import calculate from "../../logic/calculate";
import Display from '../display/Display';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <h2 className={styles.title}>Calculator</h2>
        <ButtonPanel />
        <Display />
      </div>
    </div>
  );
}

export default App;
