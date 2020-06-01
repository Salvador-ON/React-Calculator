import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  let result;
  return (
    <div className="Frame">
      <Display result={result || '0'} />
      <ButtonPanel />
    </div>
  );
}

export default App;
