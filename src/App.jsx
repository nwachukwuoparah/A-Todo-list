import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Header from './Header'
import Controles from './controles'
import data from './data.json'
function App() {
  const [state, setState] = useState('')
  const [todo, settodo] = useState(data)
  const [count, setcount] = useState(todo.length)

  const handleClick = () => {
    let newData = {}
    newData.id = count + 1
    newData.task = state
    settodo((cure) => { return [...cure, newData] })
    setcount((c) => c + 1)
  }

  const DeleteItem = (val) => {
    let nweList = todo.filter((list) => (list.id !== val.id))
    console.log(val.id)
    settodo(nweList)
    setcount((c) => c - 1)
    console.log(nweList)
  }
  // useEffect(()=>{console.log(item)},[])
  return (<div className='App'>
    <div className='todo'>
      <Header set={setState} Click={handleClick} />
      <Controles todo={todo} Del={DeleteItem} coun={count} />
    </div>
  </div>
  );
}

export default App;
