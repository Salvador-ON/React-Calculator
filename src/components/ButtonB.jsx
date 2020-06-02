import React from 'react';
import PropTypes from 'prop-types';

const ButtonB = ({ name, wide, color, getValue }) => (
  <React.Fragment>
    <button onClick={getValue} type="button" value={name} className={(color || 'orange')} style={{ width: (wide ? '50%' : '25%'), height: '100px' }}>
      {name}
    </button>
  </React.Fragment>
);

ButtonB.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

ButtonB.defaultProps = {
  color: '',
};

export default ButtonB;
