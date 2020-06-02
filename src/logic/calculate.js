import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, currentValue, operation } = dataObject;

  total = total || '0';
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['+', '-', 'x', '÷'];

  if (buttonName === '.' && !currentValue.includes('.')) {
    currentValue += buttonName;
  }

  if (nums.includes(buttonName)) {
    currentValue += buttonName;
  }

  if (buttonName === 'AC') {
    total = '';
    currentValue = '';
    operation = '';
  }

  if (buttonName === '=') {
    if (operation !== '') {
      total = operate(total, currentValue || '0', operation).toString();
      currentValue = total;
      operation = '';
    }
  }

  if (buttonName === '+/-') {
    total = (currentValue * -1).toString();
    currentValue = '';
    operation = '';
  }

  if (buttonName === '%' && currentValue !== '') {
    currentValue = (currentValue / 100).toString();
  }

  if (ops.includes(buttonName)) {
    if (
      (buttonName === '-'
        || buttonName === '+'
        || buttonName === 'x'
        || buttonName === '÷')
      && currentValue !== ''
    ) {
      if (total === '0' || operation === '') {
        total = currentValue;
      } else {
        total = operate(total, currentValue, buttonName).toString();
      }

      currentValue = '';
    }

    operation = buttonName;
  }

  const resObj = {
    total: total.toString(),
    currentValue: currentValue.toString(),
    operation,
  };

  return resObj;
};

export default calculate;
