import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App w-full">
    <h1>{count}</h1>
    <button onClick={()=>setCount(count + 1)} className="btn btn-secondary">Aumentar</button>
    </div>
  )
}

export default App
