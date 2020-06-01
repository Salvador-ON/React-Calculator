import React from 'react';
import ButtonB from './ButtonB';

const ButtonPanel = () => (
  <React.Fragment>
    <div className="Group">
      <ButtonB name="AC" wide={ false } color="grey"/>
      <ButtonB name="+/-" wide={ false } color="grey"/>
      <ButtonB name="%" wide={ false } color="grey"/>
      <ButtonB name="÷" wide={ false }/>
    </div>
    <div className="Group">
      <ButtonB name="7" wide={ false } color="grey"/>
      <ButtonB name="8" wide={ false } color="grey"/>
      <ButtonB name="9" wide={ false } color="grey"/>
      <ButtonB name="X" wide={ false }/>
    </div>
    <div className="Group">
      <ButtonB name="4" wide={ false } color="grey"/>
      <ButtonB name="5" wide={ false } color="grey"/>
      <ButtonB name="6" wide={ false } color="grey"/>
      <ButtonB name="-" wide={ false }/>
    </div>
    <div className="Group1">
      <ButtonB name="1" wide={ false } color="grey"/>
      <ButtonB name="2" wide={ false } color="grey"/>
      <ButtonB name="3" wide={ false } color="grey"/>
      <ButtonB name="+" wide={ false }/>
    </div>
    <div className="Group1">
      <ButtonB name="0" wide= { true } color="grey"/>
      <ButtonB name="." wide={ false } color="grey"/>
      <ButtonB name="=" wide={ false }/>
    </div>
  </React.Fragment>
);

export default ButtonPanel;
