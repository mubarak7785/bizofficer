import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Filter } from './Filter/Filter'
import { Model } from './Model/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Filter/>
     <Model/>
    </div>
  )
}

export default App
