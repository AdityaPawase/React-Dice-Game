import { useState } from 'react'
import StartGame from './Components/StartGame'
import MainGame from './Components/MainGame';


function App() {
  
  const[gameStart,isGameStart]=useState(false);
  const togglePage=()=>{
    isGameStart((pre)=>(!pre));
  }
  return (
    <>
      {gameStart?<MainGame />:<StartGame toggle={togglePage}/>}
    </>
  )
}

export default App
