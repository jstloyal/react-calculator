import React from 'react';
import ButtonPanel from '../button-panel/ButtonPanel';
import Display from '../Display';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.container}>
      <div class={styles.app}>
        <h2 class={styles.title}>React Calculator</h2>
        <ButtonPanel />
        <Display />
      </div>
    </div>
  );
}

export default App;
