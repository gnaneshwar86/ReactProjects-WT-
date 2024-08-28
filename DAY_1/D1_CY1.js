import React from 'react';
import './App.css';
const display=()=>{
  const name1="nani";
  const name2="nani";
  const obj1={name:"nani"}
  const obj2={name:"nani"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const App=()=>{
  return(
    <div>
      <button onClick={display}>Click</button>
    </div>
  )
 }
export default App;