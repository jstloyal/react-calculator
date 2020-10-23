import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="group1">
        <Button names="AC" />
        <Button names="+/-" />
        <Button names="%" />
        <Button names="AC" />
        <Button names="&#247;" />
      </div>
      <div className="group2">
        <Button names="7" />
        <Button names="8" />
        <Button names="9" />
        <Button names="X" />
      </div>
      <div className="group3">
        <Button names="4" />
        <Button names="5" />
        <Button names="6" />
        <Button names="-" />
      </div>
      <div className="group4">
        <Button names="1" />
        <Button names="2" />
        <Button names="3" />
        <Button names="+" />
      </div>
      <div className="group5">
        <Button names="0" />
        <Button names="." />
        <Button names="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
