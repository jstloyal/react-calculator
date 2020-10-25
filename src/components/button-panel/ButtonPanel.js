import React from 'react';
import Button from '../Button';
import styles from './ButtonPanel.module.css';

function ButtonPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <Button names="AC" color={'#dfdfdf'} />
        <Button names="+/-" color={'#dfdfdf'} />
        <Button names="%" color={'#dfdfdf'} />
        <Button names="&#247;" />
      </div>
      <div className={styles.group}>
        <Button names="7" color={'#dfdfdf'} />
        <Button names="8" color={'#dfdfdf'} />
        <Button names="9" color={'#dfdfdf'} />
        <Button names="X" />
      </div>
      <div className={styles.group}>
        <Button names="4" color={'#dfdfdf'} />
        <Button names="5" color={'#dfdfdf'} />
        <Button names="6" color={'#dfdfdf'} />
        <Button names="-" />
      </div>
      <div className={styles.group}>
        <Button names="1" color={'#dfdfdf'} />
        <Button names="2" color={'#dfdfdf'} />
        <Button names="3" color={'#dfdfdf'} />
        <Button names="+" />
      </div>
      <div className={styles.group}>
        <Button names="0" color={'#dfdfdf'} wide={100} />
        <Button names="." color={'#dfdfdf'} />
        <Button names="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
