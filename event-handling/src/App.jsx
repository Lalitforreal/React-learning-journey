import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function handleClick(){
    alert("Click kiyaaaa")
  }
  function handleHover(){
    alert("Hover hora hai")
  }

  function handleInput(e){
    // console.log("Input hua")
    console.log("Value currently: ", e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("Submit kardu kya?")
  }

  return (
    <>
    <button onClick={handleClick}>
      Click me
    </button>

    <p onMouseOver={handleHover}>
      Hello I am para
    </p>

    <form onSubmit={handleSubmit}>
      <input type="text" onChange= {handleInput}/> 
      <button type='submit' > Submit</button>
    </form>



    </>
  )
}

export default App
