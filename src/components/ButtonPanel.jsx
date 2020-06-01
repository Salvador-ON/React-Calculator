import React from 'react';
import ButtonB from './ButtonB';

const ButtonPanel = () => (
  <React.Fragment>
    <div className='Group'>
      <ButtonB name='AC' wide='25%' />
      <ButtonB name='+/-' wide='25%' />
      <ButtonB name='%' wide='25%' />
      <ButtonB name='÷' wide='25%' />
    </div>
    <div className="Group">
      <ButtonB name='7' wide='25%' />
      <ButtonB name='8' wide='25%' />
      <ButtonB name='9' wide='25%' />
      <ButtonB name='X' wide='25%' />
    </div>
    <div className="Group">
      <ButtonB name='4' wide='25%' />
      <ButtonB name='5' wide='25%' />
      <ButtonB name='6' wide='25%' />
      <ButtonB name='-' wide='25%' />
    </div>
    <div className="Group1">
      <ButtonB name='1' wide='25%' />
      <ButtonB name='2' wide='25%' />
      <ButtonB name='3' wide='25%' />
      <ButtonB name='+' wide='25%' />
    </div>
    <div className="Group1">
      <ButtonB name='0' wide='50%' />
      <ButtonB name='.' wide='25%' />
      <ButtonB name='=' wide='25%' />
    </div>
  </React.Fragment>
);

export default ButtonPanel;
