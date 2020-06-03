import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [data, SetData] = React.useState({
    total: '',
    next: '',
    operation: '',
  });

  const SetCV = value => {
    const { total, next, operation } = value;
    SetData({
      total,
      next,
      operation,
    });
  };

  const LogicOp = value => {
    const dataObject = calculate(data, value);
    SetCV(dataObject);
  };

  const getValue = e => {
    LogicOp(e.target.value);
  };

  return (
    <div className="Frame">
      <Display
        result={
          data.next
          || (data.total === '' ? '0' : '')
          || (data.next === '' && data.operation === '' ? data.total : '')
          || (data.next === '' && data.operation !== '' ? data.operation : '')
        }
      />
      <ButtonPanel getValue={getValue} />
    </div>
  );
}

export default App;
