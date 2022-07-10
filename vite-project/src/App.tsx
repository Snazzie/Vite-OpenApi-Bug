import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {ProcessPriorityEnum} from "@vital/api"

const f: ProcessPriorityEnum = ProcessPriorityEnum.High
function App() {

  return (
    <div className="App">
      {f}
    </div>
  )
}

export default App
