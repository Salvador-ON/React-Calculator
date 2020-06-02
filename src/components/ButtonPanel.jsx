import React from 'react';
import PropTypes from 'prop-types';
import ButtonB from './ButtonB';

const ButtonPanel = ({ getValue }) => {
  return (
    <React.Fragment>
      <div className="Group">
        <ButtonB getValue={getValue} name="AC" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="+/-" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="%" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="÷" wide={false} />
      </div>
      <div className="Group">
        <ButtonB getValue={getValue} name="7" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="8" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="9" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="x" wide={false} />
      </div>
      <div className="Group">
        <ButtonB getValue={getValue} name="4" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="5" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="6" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="-" wide={false} />
      </div>
      <div className="Group1">
        <ButtonB getValue={getValue} name="1" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="2" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="3" wide={false} color="grey" />
        <ButtonB getValue={getValue} name="+" wide={false} />
      </div>
      <div className="Group1">
        <ButtonB getValue={getValue} name="0" wide color="grey" />
        <ButtonB getValue={getValue} name="." wide={false} color="grey" />
        <ButtonB getValue={getValue} name="=" wide={false} />
      </div>
    </React.Fragment>
  );
};

ButtonPanel.propTypes = {
  getValue: PropTypes.func.isRequired,
};

export default ButtonPanel;
