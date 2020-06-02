const Big = require('big.js');

const operate = (ValueOne, ValueTwo, opt) => {
  let result;
  if (opt === '+') {
    result = Big(ValueOne).plus(ValueTwo);
  }

  if (opt === '+/-') {
    result = Big(ValueOne).plus(-1);
  }

  if (opt === '-') {
    result = Big(ValueOne).minus(ValueTwo);
  }

  if (opt === 'x') {
    result = Big(ValueOne).times(ValueTwo);
  }

  if (opt === '÷') {
    if (ValueTwo === '0') {
      result = '0';
    } else {
      result = Big(ValueOne).div(ValueTwo);
    }
  }

  if (opt === '%') {
    // if (!ValueTwo) {
    result = Big(ValueOne).div(100);
    // } else {
    //   result = Big(ValueTwo).times(ValueOne).div(100);
    // }
  }

  return result;
};

export default operate;
