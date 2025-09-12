import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logoutbtn from './components/Logoutbtn';
import Loginbtn from './components/Loginbtn';

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  if(!isLoggedIn){
    return(
      <Loginbtn/>
    )
  }

  //yaha if loggenin is true toh and operator use toh logout button dikhega
  return(
    <div>
      {isLoggedIn && <Logoutbtn/>} 
    </div>
  )



  // const [isLoggedIn, setLogin] = useState(true);
  //   return(
  //     <div>
  //       {isLoggedIn ? <Logoutbtn/> : <Loginbtn/>}
  //     </div>
  //   )

  // if(isLoggedIn){
  //   return(

  //     <Logoutbtn/>
  //   )
    
  // }else{
  //   return(
  //     <Loginbtn/>
  //   )
  // }
}

export default App
