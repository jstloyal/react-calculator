import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ name, color, wide, clickHandler }) => (
  
  <button
    type="button"
    className={wide ? styles.wide : styles.normal}
    onClick={() => clickHandler(name)}
    style={{ backgroundColor: color }}
  >
    {name}
  </button>
  
  
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: "#fe9241",
  wide: false,
};

export default Button;
