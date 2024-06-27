import { useState } from 'react'
import CakeContainer from './containers/CakeContainer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>The BNTA bakery</h1>
      <CakeContainer/>
    </>
  )
}

export default App
