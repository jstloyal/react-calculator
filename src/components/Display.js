import React from 'react'
import PropTypes from 'prop-types'

function Display({result}) {
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

Display.PropTypes = {
  result: PropTypes.string,
}
Display.defaultProps = {
  result = 0
}

export default Display;