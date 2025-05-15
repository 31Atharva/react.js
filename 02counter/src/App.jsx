import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0)

const addValue = () => {
  console.log("Clicked",counter)
  setCounter(counter + 1)
  if (counter > 20) {
    alert("Counter value is greater than 10")
    setCounter(20)
  }
  //counter = counter + 1
  //console.log(counter)
}

const removeValue = () => {
  console.log("Clicked",counter)
  setCounter(counter - 1)
  if (counter < 0) {
    alert("Counter value is less than 0")
    setCounter(0)

  }
  //counter = counter - 1
  //console.log(counter)}
}


  return (
    <>
    <h1>Atharva </h1>
    <h8>Counter value is : {counter}</h8>
    <br />
    <button
    onClick = {addValue}>
    Add value</button>
    <br />
    <button
    onClick={removeValue}>
    Remove value</button>
    </>
  )
}

export default App
