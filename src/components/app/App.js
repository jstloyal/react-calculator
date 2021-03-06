import React, { Component } from 'react';
import Display from '../display/Display';
import ButtonPanel from '../button-panel/ButtonPanel';
// eslint-disable-next-line
import calculate from "../../logic/calculate";
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const defaultDisplay = '0';
    const { next, total } = this.state;

    const result = next || total || defaultDisplay;
    return (
      <div className={styles.container}>
        <div className={styles.app}>
          <h2 className={styles.title}>Calculator</h2>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
