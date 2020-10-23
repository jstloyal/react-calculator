import React from 'react'
import Button from './Button'

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="group1">
        <button names="AC" />
        <button names="+/-" />
        <button names="%" />
        <button names="AC" />
        <button names="&#247;" />
      </div>
      <div className="group2">
        <button names="7" />
        <button names="8" />
        <button names="9" />
        <button names="X" />
      </div>
      <div className="group3">
        <button names="4" />
        <button names="5" />
        <button names="6" />
        <button names="-" />
      </div>
      <div className="group4">
        <button names="1" />
        <button names="2" />
        <button names="3" />
        <button names="+" />
      </div>
      <div className="group5">
        <button names="0" />
        <button names="." />
        <button names="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;