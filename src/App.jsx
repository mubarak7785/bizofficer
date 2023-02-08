import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home/Home'
import { Form } from "./components/Form/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
     
    </div>
  )
}

export default App
