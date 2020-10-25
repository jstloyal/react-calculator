import React from "react";
import ButtonPanel from "../button-panel/ButtonPanel";
import Display from "../Display";
import styles from "./App.module.css";

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
