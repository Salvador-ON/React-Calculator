const Big = require('big.js');

const operate = (ValueOne, ValueTwo, opt) => {
  let result;
  if (opt === '+') {
    result = Big(ValueOne).plus(Big(ValueTwo));
  }

  if (opt === '+/-') {
    result = Big(ValueTwo) * (-1);
  }

  if (opt === '-') {
    result = Big(ValueOne).minus(Big(ValueTwo));
  }

  if (opt === 'x') {
    result = Big(ValueOne).times(Big(ValueTwo));
  }

  if (opt === '÷') {
    if (ValueTwo === '0') {
      result = 'Zero division error';
    } else {
      result = Big(ValueOne).div(Big(ValueTwo));
    }
  }

  if (opt === '%') {
    result = Big(ValueTwo).div(Big(100));
  }

  return result;
};

export default operate;
