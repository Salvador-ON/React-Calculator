import React from 'react';
import PropTypes from 'prop-types';

const ButtonB = ({ name, wide, color}) => (
  <React.Fragment>
    <button type="button" value={name} className={color} style={{ width: (wide ? '50%' : '25%'), height: '100px' }}>
      {name}
    </button>
  </React.Fragment>
);

ButtonB.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonB;
