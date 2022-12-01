import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './Header'
import Controles from './controles'
import data from './data.json'
function App() {
  const [state, setState] = useState('')
  const [todo, settodo] = useState(["first-todo"])
  const [count, setcount] = useState(todo.length)
  const handleClick = () => {
    settodo((cure) => { return [...cure, state] })
    setcount((c) => c + 1)
  }
  const DeleteItem = (val) => {
    let nweList = todo.filter((list) => (list !== val))
    settodo(nweList)
    setcount((c) => c - 1)
  }
  return (<div className='App'>
    <div className='todo'>
      <Header set={setState} Click={handleClick} />
      <Controles todo={todo} Del={DeleteItem} coun={count} />
    </div>
  </div>
  );
}

export default App;
