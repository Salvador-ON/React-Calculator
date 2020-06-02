import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";

const test = {
  total: "",
  currentValue: "",
  operation: "",
};

function App() {
  const [data, SetData] = React.useState({
    total: "",
    currentValue: "",
    operation: "",
  });

  const getValue = (e) =>{
    SetCV(e.target.value);
  }

  const SetCV = (value) => {
    SetData({

    ...data,
    currentValue: data.currentValue + value
  });
      

  }

  return (
    <div className="Frame">
      <Display />
      <ButtonPanel getValue={getValue} />
    </div>
  );
}

export default App;
