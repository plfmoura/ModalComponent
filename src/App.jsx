import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ModalExample from './components/modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ModalExample btnName={'Show Modal'}><Form /></ModalExample>
    </div>
  )
}

export default App
