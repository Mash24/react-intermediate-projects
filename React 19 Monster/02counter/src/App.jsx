import { useState } from 'react'
import './App.css'


function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1)
    console.log(counter)
  }

  return (
    <>
      <h1>React Course with React 19 Monster {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button key="add" onClick={addValue}>Add value</button>
      <button key="remove" onClick={() => setCounter(prevCounter => prevCounter - 1)}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
