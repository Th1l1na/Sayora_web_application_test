import { useState } from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Dashboard from './component/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sidebar/>
        <Dashboard/>
      </div>
      
    </>
  )
}

export default App
