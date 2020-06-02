const calculate = (dataObject, buttonName) =>{

  let {total, currentValue, operation} = dataObject;
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'];
  const ops = ['+', '-', 'x', '÷', '%'];
   
  if(nums.includes(buttonName)){
    currentValue =+ buttonName
    console.log(currentValue);
  }

  if (ops.includes(buttonName)){
    if(buttonName === '+/-'){
      console.log('+-');
      // dataObject.currentValue = dataObject.currentValue*-1;
    }
  
    if(buttonName === '%'){
      console.log('%');
      // dataObject.currentValue = dataObject.currentValue/(100);
    }
  
    if(buttonName === 'AC'){
      console.log('ac');
      dataObject.total = null
      dataObject.currentValue = null
    }
  }


  


  return dataObject
}

export default calculate;