import React from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import Dice from './Dice'
import GameRules from './GameRules'
import { useState } from 'react'
import StartGame from './StartGame'

function MainGame() {
  const[diceimg,setdiceimg]=useState("dice_1.png");
  const[diceNum,setdiceNum]=useState();
  const [num,setNum]=useState();
  const [update,setUpdate]=useState(0);
  const [error,setError]=useState("");
  const [rule,setrule]=useState(false);
  const[btnName,setbtnName]=useState("Show Rules");

  const showRule=()=>{
    setrule((prev)=>(!prev));
    rule?setbtnName("Show Rules"):setbtnName("Hide Rules");

  }
  
  

 
  {console.log(diceNum+1 , num);}


 
  const rollDice=()=>{
    if (!num)
      {
        setError("Please Select Any Number");
        return;
      }
      setError("");
    const dices=["dice_1.png","dice_2.png","dice_3.png","dice_4.png","dice_5.png","dice_6.png"];
    const randomNum=Math.floor(Math.random()*6);
    const randomImg=dices[randomNum];
    setdiceimg(randomImg);
    setdiceNum(randomNum);
    
    if(diceNum+1==num)
      {
       // console.log(update)
        setUpdate((prev)=>prev+randomNum);
      }
      else
      {
        setUpdate((prev)=>prev-2);
      }
      setNum(undefined);
    

  }
  const resetScore=()=>{
    setUpdate(0);
  }


  return (
  
    <SubContainer>
      <div className="sub">
        <Score update={update}/>
        <NumberSelector num={num} setNum={setNum} error={error}/>
        
      </div>
      <div className="dice">
        <Dice diceNum={diceNum} setdiceNum={setdiceNum} diceimg={diceimg} rollDice={rollDice} resetScore={resetScore} showRule={showRule} btnName={btnName}/>
      </div>
      {rule?<GameRules/>:" "}
    </SubContainer>
    
    
  )
}
const SubContainer=styled.div`
padding-top: 20px;
.sub{
  display: flex;
  justify-content: space-around;
  
}

  
`

export default MainGame
