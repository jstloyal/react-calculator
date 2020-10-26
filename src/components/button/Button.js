import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ name, color, wide }) {
  return (
    <div
      type="button"
      className={styles.button}
      style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
    >
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#fe902a',
  wide: false,
};

export default Button;
