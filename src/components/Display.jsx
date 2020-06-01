import React from 'react';
import PropTypes from 'prop-types'

const Display = ({result}) => {
  return (<React.Fragment>
    <div className="DisplayScreen">
      <h1 className="Result"> {result}</h1>
     </div>
    </React.Fragment>  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
}
 
export default Display;