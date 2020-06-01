import React from 'react';
import PropTypes from 'prop-types';

const ButtonB = ({ name, wide }) => (
    <React.Fragment>
      <button type="button" value={name} style={{ width: wide, height: '75px' }}>
        {name}
      </button>
    </React.Fragment>
  );


ButtonB.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
};

export default ButtonB;
