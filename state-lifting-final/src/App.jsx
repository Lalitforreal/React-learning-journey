import React, { useState } from 'react'
import Card from './Components/Card'

//create the state
//manage the state
//change the state
//sabhi child me sync karwadunga state ko
function App() {
  const [name, setName] = useState('')
  return (
    <div>
      <Card name={name} setName={setName} />
    </div>
  )
}

export default App
