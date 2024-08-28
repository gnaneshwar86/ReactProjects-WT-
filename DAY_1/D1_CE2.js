import React from 'react';
import './App.css';
 const App=()=>{
  let myObject={name:"Madras"}
  let newObject=myObject
  myObject.name="Chennai"
  let array=["a","e","i","o"]
  let VowelArray=array
  array.push("u");
  const display=()=>{
    alert("Check the Console Output!")
    console.log(myObject.name)
    console.log(array)
  }
  return (
    <div>
      <h1>Reference Data Types use same memory</h1>
      <button onClick={display}>Check</button>
    </div>
  )
 }
export default App;