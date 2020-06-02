import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, currentValue, operation } = dataObject;

  total = total || '0';
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['+', '-', 'x', '÷', '%'];

  if (buttonName === '.' && !currentValue.includes('.')) {
    currentValue = currentValue + buttonName;
    console.log(currentValue, 'current updated');
  }

  if (nums.includes(buttonName)) {
    currentValue = currentValue + buttonName;
    console.log(currentValue, 'current updated');
  }

  if (buttonName === 'AC') {
    console.log('ac');
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
    console.log('=');
  }

  if (buttonName === '+/-') {
    total = (currentValue*-1).toString();
    currentValue = '';
    operation = '';
  }

  if (ops.includes(buttonName)) {
   

    if (buttonName === '%' && currentValue !== '') {
      if (total === '0' || operation === '') {
        total = currentValue;
      } else {
        total = operate(total, currentValue, buttonName).toString();
      }

      currentValue = '';
      operation = '';
    }

    if (
      (buttonName === '-' ||
        buttonName === '+' ||
        buttonName === 'x' ||
        buttonName === '÷') &&
      currentValue !== ''
    ) {
      if (total === '0' || operation === '') {
        total = currentValue;
      } else {
        total = operate(total, currentValue, buttonName).toString();
      }

      currentValue = '';
      console.log('-');
    }

    operation = buttonName;
  }

  const resObj = {
    total: total.toString(),
    currentValue: currentValue.toString(),
    operation: operation,
  };

  console.log(resObj, 'resss');

  return resObj;
};

export default calculate;
