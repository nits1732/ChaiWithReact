import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter]=useState(15)
// let counter=15;

const addvalue=()=>{
  counter=counter+1; 
  if(counter>20)counter=counter-1;
  setCounter(counter)
  console.log(counter);
}
const removevalue=()=>{
  counter=counter-1;
  if(counter<0)counter=counter+1
  setCounter(counter)
  console.log(counter)
}
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter :{counter}</h2>
      <button 
      onClick={addvalue}
      >Add Value</button>
      <br />
      <br />
      <button 
      onClick={removevalue}
      >Remove Value</button>
      <br />
      <p>Footer Counter {counter}</p>
    </>
  )
}

export default App
