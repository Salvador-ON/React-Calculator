import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <React.Fragment>
    <div className="DisplayScreen">
      <h1 className="Result">
        {result}
      </h1>
    </div>
  </React.Fragment>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
