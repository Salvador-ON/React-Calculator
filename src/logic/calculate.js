import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  total = total || '0';
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['+', '-', 'x', '÷'];

  if (buttonName === '.' && !next.includes('.')) {
    next += buttonName;
  }

  if (nums.includes(buttonName)) {
    next += buttonName;
  }

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  }

  if (buttonName === '=') {
    if (operation !== '') {
      total = operate(total, next || '0', operation).toString();
      next = total;
      operation = '';
    }
  }

  if (buttonName === '+/-') {
    next = operate(total, next, buttonName).toString();
    operation = '';
  }

  if (buttonName === '%' && next !== '') {
    next = operate(total, next, buttonName).toString();
  }

  if (ops.includes(buttonName)) {
    if (next !== '') {
      if (total === '0' || operation === '') {
        total = next;
      } else {
        total = operate(total, next, buttonName).toString();
      }

      next = '';
    }

    operation = buttonName;
  }

  const resObj = {
    total: total.toString(),
    next: next.toString(),
    operation,
  };

  return resObj;
};

export default calculate;