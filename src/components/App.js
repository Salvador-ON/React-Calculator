import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  const [data, SetData] = React.useState({
    total: '',
    currentValue: '',
    operation: '',
  });

  const SetCV = value => {
    const { total, currentValue, operation } = value;
    SetData({
      total,
      currentValue,
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
      <Display result={data.currentValue || (data.total === '' ? '0' : '') || (data.currentValue === '' && data.operation === '' ? data.total : '') || (data.currentValue === '' && data.operation !== '' ? data.operation : '')} />
      <ButtonPanel getValue={getValue} />
    </div>
  );
}

export default App;
