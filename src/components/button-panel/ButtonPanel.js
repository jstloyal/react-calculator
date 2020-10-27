import React from "react";
import Button from "../button/Button";
import styles from "./ButtonPanel.module.css";

function ButtonPanel({clickHandler}) {
  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <Button names="AC" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="+/-" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="%" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="÷" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button names="7" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="8" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="9" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="x" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button names="4" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="5" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="6" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="-" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button names="1" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="2" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="3" color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="+" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button names="0" color="#dfdfdf" wide={100} clickHandler={clickHandler} />
        <Button names="." color="#dfdfdf" clickHandler={clickHandler} />
        <Button names="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default ButtonPanel;
