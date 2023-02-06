import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Filter } from './Filter/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Filter/>
    </div>
  )
}

export default App
